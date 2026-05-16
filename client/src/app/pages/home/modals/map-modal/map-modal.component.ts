import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/components/ui/modal/modal.component';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Circle as CircleStyle, Fill, Stroke } from 'ol/style';

@Component({
  selector: 'app-map-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './map-modal.component.html'
})
export class MapModalComponent implements OnChanges, OnDestroy {
  @Input() isOpen = false;
  @Input() node: any = null;
  @Output() close = new EventEmitter<void>();

  private map: Map | null = null;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isOpen'] && changes['isOpen'].currentValue) {
      // Initialize map when modal opens
      setTimeout(() => {
        this.initMap();
      }, 100);
    } else if (changes['isOpen'] && !changes['isOpen'].currentValue) {
      this.cleanupMap();
    }
  }

  private initMap() {
    if (this.map) return; // Already initialized

    const element = document.getElementById('modal-map');
    if (!element) {
      console.error('Modal map element not found');
      return;
    }

    // Hardcoded lat/long (e.g., Karachi coordinates)
    const lonLat = [67.0011, 24.8607]; 

    const marker = new Feature({
      geometry: new Point(fromLonLat(lonLat))
    });

    const vectorSource = new VectorSource({
      features: [marker]
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: new Style({
        image: new CircleStyle({
          radius: 8,
          fill: new Fill({ color: '#465fff' }), // Brand color
          stroke: new Stroke({ color: '#ffffff', width: 3 })
        })
      })
    });

    this.map = new Map({
      target: 'modal-map',
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat(lonLat),
        zoom: 12
      })
    });
  }

  private cleanupMap() {
    if (this.map) {
      this.map.setTarget(undefined);
      this.map = null;
    }
  }

  ngOnDestroy() {
    this.cleanupMap();
  }
}
