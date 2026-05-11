import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/location.service';
import { ToastService } from '../../services/toast.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ModuleRegistry, AllCommunityModule, ColDef } from 'ag-grid-community';
import { ThemeService } from '../../shared/services/theme.service';

import { OfflineStorageService } from '../../services/offline-storage.service';
import { OfflineSyncService } from '../../services/offline-sync.service';

import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../../shared/components/ui/modal/modal.component';
import { LabelComponent } from '../../shared/components/form/label/label.component';
import { InputFieldComponent } from '../../shared/components/form/input/input-field.component';
import { environment } from '../../../environments/environment';
import * as XLSX from 'xlsx';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';
import { fromLonLat, toLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Circle as CircleStyle, Fill, Stroke } from 'ol/style';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-location-import',
  standalone: true,
  imports: [CommonModule, AgGridAngular, FormsModule, ModalComponent, LabelComponent, InputFieldComponent],
  templateUrl: './location-import.component.html',
  styles: [`
    .grid-container { height: 400px; width: 100%; }
  `]
})
export class LocationImportComponent implements OnInit {
  private locationService = inject(LocationService);
  private toastService = inject(ToastService);
  private themeService = inject(ThemeService);
  private offlineStorage = inject(OfflineStorageService);
  private syncService = inject(OfflineSyncService);

  theme$ = this.themeService.theme$;

  // Left Grid (Import Preview)
  importData: any[] = [];
  importColumnDefs: ColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'latitude', headerName: 'Lat', flex: 1 },
    { field: 'longitude', headerName: 'Long', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 2 }
  ];

  // Right Grid (Live Registry)
  registryData: any[] = [];
  registryColumnDefs: ColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1.5, sortable: true, filter: true },
    { field: 'latitude', headerName: 'Lat', flex: 1 },
    { field: 'longitude', headerName: 'Long', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 2, sortable: true, filter: true },
    {
      headerName: 'Actions',
      width: 120,
      cellRenderer: (params: any) => {
        const container = document.createElement('div');
        container.className = 'flex items-center gap-2 h-full';

        // Edit Button
        const editBtn = document.createElement('button');
        editBtn.innerHTML = `
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        `;
        editBtn.className = 'p-1.5 text-brand-500 hover:bg-brand-50 rounded-md transition-colors';
        editBtn.onclick = () => this.editLocation(params.data);

        // Delete Button
        const delBtn = document.createElement('button');
        delBtn.innerHTML = `
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        `;
        delBtn.className = 'p-1.5 text-red-500 hover:bg-red-50 rounded-md transition-colors';
        delBtn.onclick = () => this.deleteLocation(params.data);

        container.appendChild(editBtn);
        container.appendChild(delBtn);
        return container;
      }
    }
  ];

  editLocation(location: any) {
    this.locationToEdit = { ...location };
    this.isEditModalOpen = true;
    this.initEditMap();
  }

  confirmEditLocation() {
    if (!this.locationToEdit?.id) return;
    
    if (!this.validatePrecision(this.locationToEdit.latitude) || !this.validatePrecision(this.locationToEdit.longitude)) {
      this.toastService.show('Coordinates must have 2-3 digits before and at least 6 digits after decimal', 'warning');
      return;
    }

    this.locationService.updateLocation(this.locationToEdit.id, this.locationToEdit).subscribe({
      next: () => {
        this.toastService.show('Location updated', 'success');
        this.isEditModalOpen = false;
        this.loadRegistry();
      },
      error: () => this.toastService.show('Failed to update location', 'error')
    });
  }

  deleteLocation(location: any) {
    this.locationToDelete = location;
    this.isDeleteModalOpen = true;
  }

  confirmDeleteLocation() {
    if (!this.locationToDelete?.id) return;
    
    this.locationService.deleteLocation(this.locationToDelete.id).subscribe({
      next: () => {
        this.toastService.show('Location deleted', 'success');
        this.isDeleteModalOpen = false;
        this.locationToDelete = null;
        this.loadRegistry();
      },
      error: () => this.toastService.show('Failed to delete location', 'error')
    });
  }

  addNewLocation() {
    this.newLocationForm = {
      name: '',
      latitude: '',
      longitude: '',
      address: ''
    };
    this.isAddModalOpen = true;
    this.initMap();
  }

  map: Map | undefined;
  markerSource = new VectorSource();
  markerLayer = new VectorLayer({
    source: this.markerSource,
    style: new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({ color: '#465fff' }), // Brand color
        stroke: new Stroke({ color: '#ffffff', width: 3 })
      })
    })
  });

  initMap() {
    setTimeout(() => {
      if (this.map) {
        this.map.setTarget('map');
        this.map.updateSize();
        return;
      }

      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          }),
          new TileLayer({
            source: new TileWMS({
              url: environment.geoserverUrl,
              params: { 'LAYERS': 'topp:states', 'TILED': true },
              serverType: 'geoserver',
            }),
          }),
          this.markerLayer
        ],
        view: new View({
          center: fromLonLat([0, 0]),
          zoom: 2
        })
      });

      this.map.on('singleclick', (evt: any) => {
        // Update Form
        const coords = toLonLat(evt.coordinate);
        this.newLocationForm.latitude = coords[1].toFixed(6);
        this.newLocationForm.longitude = coords[0].toFixed(6);

        // Update Marker
        this.markerSource.clear();
        const feature = new Feature({
          geometry: new Point(evt.coordinate)
        });
        this.markerSource.addFeature(feature);
      });
    }, 300);
  }

  editMap: Map | undefined;
  editMarkerSource = new VectorSource();
  editMarkerLayer = new VectorLayer({
    source: this.editMarkerSource,
    style: new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({ color: '#465fff' }),
        stroke: new Stroke({ color: '#ffffff', width: 3 })
      })
    })
  });

  initEditMap() {
    let retries = 0;
    const maxRetries = 10;
    
    const tryInit = setInterval(() => {
      const element = document.getElementById('editMap');
      if (element) {
        clearInterval(tryInit);
        this.performEditMapInit();
      } else if (retries >= maxRetries) {
        clearInterval(tryInit);
        console.error('Map container #editMap not found after retries');
      }
      retries++;
    }, 100);
  }

  performEditMapInit() {
    if (!this.locationToEdit) return;

    const lon = parseFloat(this.locationToEdit.longitude);
    const lat = parseFloat(this.locationToEdit.latitude);

    if (isNaN(lon) || isNaN(lat)) {
      console.warn('Invalid coordinates for edit map');
      return;
    }

    const coords = fromLonLat([lon, lat]);

    if (this.editMap) {
      this.editMap.setTarget('editMap');
      this.editMap.getView().setCenter(coords);
      this.editMap.getView().setZoom(12);
      
      setTimeout(() => {
        this.editMap?.updateSize();
        this.editMarkerSource.clear();
        this.editMarkerSource.addFeature(new Feature({ geometry: new Point(coords) }));
      }, 50);
      return;
    }

    this.editMap = new Map({
      target: 'editMap',
      layers: [
        new TileLayer({ source: new OSM() }),
        new TileLayer({
          source: new TileWMS({
            url: environment.geoserverUrl,
            params: { 'LAYERS': 'topp:states', 'TILED': true },
            serverType: 'geoserver',
          }),
        }),
        this.editMarkerLayer
      ],
      view: new View({
        center: coords,
        zoom: 12
      })
    });

    // Initial Marker
    this.editMarkerSource.clear();
    this.editMarkerSource.addFeature(new Feature({ geometry: new Point(coords) }));

    this.editMap.on('singleclick', (evt: any) => {
      const lonLat = toLonLat(evt.coordinate);
      this.locationToEdit.latitude = lonLat[1].toFixed(6);
      this.locationToEdit.longitude = lonLat[0].toFixed(6);

      this.editMarkerSource.clear();
      this.editMarkerSource.addFeature(new Feature({ geometry: new Point(evt.coordinate) }));
    });

    setTimeout(() => this.editMap?.updateSize(), 150);
  }

  onCoordinateChange(isEdit: boolean) {
    const form = isEdit ? this.locationToEdit : this.newLocationForm;
    const map = isEdit ? this.editMap : this.map;
    const source = isEdit ? this.editMarkerSource : this.markerSource;

    if (!form || !map || !source) return;

    const lat = parseFloat(form.latitude);
    const lon = parseFloat(form.longitude);

    if (this.validatePrecision(form.latitude) && this.validatePrecision(form.longitude)) {
      const coords = fromLonLat([lon, lat]);
      
      source.clear();
      source.addFeature(new Feature({ geometry: new Point(coords) }));
      
      map.getView().animate({
        center: coords,
        duration: 500
      });
    }
  }

  validatePrecision(num: any): boolean {
    if (num === null || num === undefined || num === '') return false;
    // Regex: Optional negative sign, then 2-3 digits, then a dot, then at least 6 digits
    const regex = /^-?\d{2,3}\.\d{6,}$/;
    return regex.test(num.toString());
  }

  confirmAddLocation() {
    if (!this.newLocationForm.name || !this.newLocationForm.latitude || !this.newLocationForm.longitude) {
      this.toastService.show('Please enter Name and Coordinates', 'warning');
      return;
    }

    if (!this.validatePrecision(this.newLocationForm.latitude) || !this.validatePrecision(this.newLocationForm.longitude)) {
      this.toastService.show('Coordinates must have 2-3 digits before and at least 6 digits after decimal', 'warning');
      return;
    }

    this.locationService.addLocation(this.newLocationForm).subscribe({
      next: () => {
        this.toastService.show('Location added successfully', 'success');
        this.isAddModalOpen = false;
        this.loadRegistry();
      },
      error: () => this.toastService.show('Failed to add location', 'error')
    });
  }

  pagination = {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  };

  isDragging = false;
  isAddModalOpen = false;
  isEditModalOpen = false;
  isDeleteModalOpen = false;
  locationToDelete: any = null;
  locationToEdit: any = null;
  newLocationForm = {
    name: '',
    latitude: '',
    longitude: '',
    address: ''
  };

  ngOnInit() {
    this.loadRegistry();

    // Refresh registry when offline sync completes
    this.syncService.syncCompleted$.subscribe(() => {
      console.log('🔄 Sync completed, refreshing registry...');
      this.loadRegistry();
    });
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragging = false;
    
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.handleFiles(files);
    }
  }

  async onFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      await this.handleFiles(files);
      // Reset the input value so the change event fires even if the same file is picked again
      event.target.value = '';
    }
  }

  async handleFiles(files: FileList) {
    const allResults: any[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name.toLowerCase();
      
      try {
        if (fileName.endsWith('.csv')) {
          const text = await file.text();
          allResults.push(...this.parseCSV(text));
        } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
          allResults.push(...await this.parseExcel(file));
        } else if (fileName.endsWith('.json')) {
          const text = await file.text();
          allResults.push(...this.parseJSON(text));
        } else if (fileName.endsWith('.xml')) {
          const text = await file.text();
          allResults.push(...this.parseXML(text));
        }
      } catch (err) {
        console.error(`Error parsing file ${file.name}:`, err);
        this.toastService.show(`Failed to parse ${file.name}`, 'error');
      }
    }
    
    this.importData = [...this.importData, ...allResults];
  }

  parseCSV(text: string) {
    const lines = text.split('\n');
    const result = [];
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const obj: any = {};
      const currentline = lines[i].split(',');

      headers.forEach((header, index) => {
        let val = currentline[index]?.trim();
        if (header === 'latitude' || header === 'longitude') {
          obj[header] = parseFloat(val);
        } else {
          obj[header] = val;
        }
      });
      result.push(obj);
    }
    return result;
  }

  async parseExcel(file: File): Promise<any[]> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        const mappedData = jsonData.map((row: any) => {
          const findVal = (keys: string[]) => {
            const key = Object.keys(row).find(k => keys.includes(k.toLowerCase()));
            return key ? row[key] : null;
          };

          return {
            name: findVal(['name', 'location', 'title']),
            latitude: parseFloat(findVal(['latitude', 'lat'])),
            longitude: parseFloat(findVal(['longitude', 'lng', 'long'])),
            address: findVal(['address', 'addr', 'location details']) || ''
          };
        });
        
        resolve(mappedData.filter(d => !isNaN(d.latitude) && !isNaN(d.longitude)));
      };
      reader.readAsArrayBuffer(file);
    });
  }

  parseJSON(text: string): any[] {
    const data = JSON.parse(text);
    const locations = Array.isArray(data) ? data : (data.locations || []);
    return locations.map((loc: any) => ({
      name: loc.name || loc.title,
      latitude: parseFloat(loc.latitude || loc.lat),
      longitude: parseFloat(loc.longitude || loc.lng || loc.long),
      address: loc.address || ''
    })).filter((d: any) => !isNaN(d.latitude) && !isNaN(d.longitude));
  }

  parseXML(text: string): any[] {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    const locationNodes = xmlDoc.getElementsByTagName("location");
    const result = [];

    for (let i = 0; i < locationNodes.length; i++) {
      const node = locationNodes[i];
      const getVal = (tag: string) => node.getElementsByTagName(tag)[0]?.textContent || '';

      result.push({
        name: getVal('name') || getVal('title'),
        latitude: parseFloat(getVal('latitude') || getVal('lat')),
        longitude: parseFloat(getVal('longitude') || getVal('lng') || getVal('long')),
        address: getVal('address')
      });
    }
    return result.filter(d => !isNaN(d.latitude) && !isNaN(d.longitude));
  }

  saveImport() {
    if (this.importData.length === 0) {
      this.toastService.show('No data to save', 'warning');
      return;
    }

    this.locationService.bulkSave(this.importData).subscribe({
      next: (res) => {
        this.toastService.show(res.message, 'success');
        this.importData = [];
        this.loadRegistry();
      },
      error: async () => {
        await this.offlineStorage.addPendingLocations(this.importData);
        this.toastService.show('Offline: Locations queued for sync', 'info');
        this.importData = [];
      }
    });
  }

  clearImport() {
    this.importData = [];
  }

  loadRegistry() {
    this.locationService.getLocations(this.pagination.page, this.pagination.limit).subscribe({
      next: (res) => {
        this.registryData = res.data;
        this.pagination = res.pagination;
      },
      error: () => this.toastService.show('Failed to load locations', 'error')
    });
  }

  prevPage() {
    if (this.pagination.page > 1) {
      this.pagination.page--;
      this.loadRegistry();
    }
  }

  nextPage() {
    if (this.pagination.page < this.pagination.totalPages) {
      this.pagination.page++;
      this.loadRegistry();
    }
  }
}
