import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/location.service';
import { ToastService } from '../../services/toast.service';
import { AgGridAngular } from 'ag-grid-angular';
import { ModuleRegistry, AllCommunityModule, ColDef } from 'ag-grid-community';
import { ThemeService } from '../../shared/services/theme.service';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-location-import',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './location-import.component.html',
  styles: [`
    .grid-container { height: 400px; width: 100%; }
  `]
})
export class LocationImportComponent implements OnInit {
  private locationService = inject(LocationService);
  private toastService = inject(ToastService);
  private themeService = inject(ThemeService);

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
    { field: 'name', headerName: 'Name', flex: 1, sortable: true, filter: true },
    { field: 'latitude', headerName: 'Lat', flex: 1 },
    { field: 'longitude', headerName: 'Long', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 2, sortable: true, filter: true }
  ];

  pagination = {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0
  };

  ngOnInit() {
    this.loadRegistry();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const text = e.target.result;
        this.parseCSV(text);
      };
      reader.readAsText(file);
      // Reset the input value so the change event fires even if the same file is picked again
      event.target.value = '';
    }
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
    this.importData = result;
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
      error: () => this.toastService.show('Failed to save locations', 'error')
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
      error: () => this.toastService.show('Failed to load registry', 'error')
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
