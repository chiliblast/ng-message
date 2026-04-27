import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfflineStorageService {
  private dbName = 'NgMessageDB';
  private dbVersion = 1;
  private db: IDBDatabase | null = null;

  constructor() {
    this.initDB();
  }

  private initDB() {
    const request = indexedDB.open(this.dbName, this.dbVersion);

    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      
      // Store for all messages (received, sent, info)
      if (!db.objectStoreNames.contains('messages')) {
        db.createObjectStore('messages', { keyPath: 'id' });
      }

      // Store for pending messages to be synced
      if (!db.objectStoreNames.contains('pendingMessages')) {
        db.createObjectStore('pendingMessages', { keyPath: 'localId' });
      }

      // Store for ALL registered locations (Global)
      if (!db.objectStoreNames.contains('locations')) {
        db.createObjectStore('locations', { keyPath: 'id' });
      }

      // Store for pending locations to be synced
      if (!db.objectStoreNames.contains('pendingLocations')) {
        db.createObjectStore('pendingLocations', { keyPath: 'localId' });
      }
    };

    request.onsuccess = (event: any) => {
      this.db = event.target.result;
    };

    request.onerror = (event: any) => {
      console.error('IndexedDB error:', event.target.error);
    };
  }

  async saveMessages(messages: any[], type: 'received' | 'sent' | 'all') {
    if (!this.db) return;
    const tx = this.db.transaction('messages', 'readwrite');
    const store = tx.objectStore('messages');
    messages.forEach(msg => {
      store.put({ ...msg, storageType: type });
    });
  }

  async getMessages(type: 'received' | 'sent' | 'all'): Promise<any[]> {
    return new Promise((resolve) => {
      if (!this.db) {
        setTimeout(async () => {
          const res = await this.getMessages(type);
          resolve(res);
        }, 500);
        return;
      }
      const tx = this.db.transaction('messages', 'readonly');
      const store = tx.objectStore('messages');
      const request = store.getAll();
      request.onsuccess = () => {
        const all = request.result;
        resolve(all.filter((m: any) => m.storageType === type));
      };
    });
  }

  async saveHierarchy(hierarchy: any) {
    if (!this.db) return;
    const tx = this.db.transaction('messages', 'readwrite');
    const store = tx.objectStore('messages');
    // We store hierarchy as a special type
    store.put({ id: 'org_tree', data: hierarchy, storageType: 'hierarchy' });
  }

  async getHierarchy(): Promise<any> {
    return new Promise((resolve) => {
      if (!this.db) return resolve(null);
      const tx = this.db.transaction('messages', 'readonly');
      const store = tx.objectStore('messages');
      const request = store.get('org_tree');
      request.onsuccess = () => resolve(request.result?.data || null);
    });
  }

  async saveSettings(key: string, data: any) {
    if (!this.db) return;
    const tx = this.db.transaction('messages', 'readwrite');
    const store = tx.objectStore('messages');
    store.put({ id: `settings_${key}`, data: data, storageType: 'settings' });
  }

  async getSettings(key: string): Promise<any> {
    return new Promise((resolve) => {
      if (!this.db) {
        setTimeout(async () => {
          resolve(await this.getSettings(key));
        }, 200);
        return;
      }
      const tx = this.db.transaction('messages', 'readonly');
      const store = tx.objectStore('messages');
      const request = store.get(`settings_${key}`);
      request.onsuccess = () => resolve(request.result?.data || null);
    });
  }

  async addPendingMessage(message: any) {
    if (!this.db) return;
    const tx = this.db.transaction('pendingMessages', 'readwrite');
    const store = tx.objectStore('pendingMessages');
    store.add({ ...message, localId: Date.now(), status: 'pending' });
  }

  async getPendingMessages(): Promise<any[]> {
    return new Promise((resolve) => {
      if (!this.db) return resolve([]);
      const tx = this.db.transaction('pendingMessages', 'readonly');
      const store = tx.objectStore('pendingMessages');
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
    });
  }

  async removePendingMessage(localId: number) {
    if (!this.db) return;
    const tx = this.db.transaction('pendingMessages', 'readwrite');
    const store = tx.objectStore('pendingMessages');
    store.delete(localId);
  }

  async saveLocations(locations: any[]) {
    if (!this.db) return;
    const tx = this.db.transaction('locations', 'readwrite');
    const store = tx.objectStore('locations');
    // Clear old data first for a fresh sync
    store.clear();
    locations.forEach(loc => store.put(loc));
  }

  async getLocations(): Promise<any[]> {
    return new Promise((resolve) => {
      if (!this.db) {
        setTimeout(async () => resolve(await this.getLocations()), 200);
        return;
      }
      const tx = this.db.transaction('locations', 'readonly');
      const store = tx.objectStore('locations');
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
    });
  }

  async addPendingLocations(locations: any[]) {
    if (!this.db) return;
    const tx = this.db.transaction('pendingLocations', 'readwrite');
    const store = tx.objectStore('pendingLocations');
    store.add({ localId: Date.now(), data: locations });
  }

  async getPendingLocations(): Promise<any[]> {
    return new Promise((resolve) => {
      if (!this.db) return resolve([]);
      const tx = this.db.transaction('pendingLocations', 'readonly');
      const store = tx.objectStore('pendingLocations');
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result || []);
    });
  }
}
