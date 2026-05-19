import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, from, of, map } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HierarchyService {
  private http = inject(HttpClient);
  private storage = inject(OfflineStorageService);
  private authService = inject(AuthService);
  private apiUrl = `${environment.apiBaseUrl}/hierarchy`;

  getHierarchy(): Observable<any> {
    // TODO: Remove this mock response once real response is available
    const mockRes = [
  {
    "groupId": 6,
    "parentGroupId": 0,
    "groupUuid": "a1b2c3d4-e5f6-7890-abcd-ef1234560001",
    "parentGroupUuid": null,
    "groupName": "test",
    "shortName": "TST",
    "displayName": "Test Group",
    "userType": "ADMIN",
    "fname": "Test Root",
    "progress": 0,
    "depthFromStart": 1,
    "children": [
      {
        "groupId": 7,
        "parentGroupId": 6,
        "groupUuid": "a1b2c3d4-e5f6-7890-abcd-ef1234560002",
        "parentGroupUuid": "a1b2c3d4-e5f6-7890-abcd-ef1234560001",
        "groupName": "operations",
        "shortName": "OPS",
        "displayName": "Operations Team",
        "userType": "MANAGER",
        "fname": "Operations Node",
        "progress": 45,
        "depthFromStart": 2,
        "children": [
          {
            "groupId": 8,
            "parentGroupId": 7,
            "groupUuid": "a1b2c3d4-e5f6-7890-abcd-ef1234560003",
            "parentGroupUuid": "a1b2c3d4-e5f6-7890-abcd-ef1234560002",
            "groupName": "field-team",
            "shortName": "FLT",
            "displayName": "Field Team",
            "userType": "USER",
            "fname": "Field Operations",
            "progress": 75,
            "depthFromStart": 3,
            "children": []
          }
        ]
      }
    ]
  },
  {
    "groupId": 9,
    "parentGroupId": 0,
    "groupUuid": "a1b2c3d4-e5f6-7890-abcd-ef1234560004",
    "parentGroupUuid": null,
    "groupName": "finance",
    "shortName": "FIN",
    "displayName": "Finance Department",
    "userType": "ADMIN",
    "fname": "Finance Root",
    "progress": 20,
    "depthFromStart": 1,
    "children": []
  }
]

    const currentUser = this.authService.currentUserValue;

    const mapGroupNode = (group: any): any => {
      return {
        id: group.groupId,
        uuid: group.groupUuid,
        name: group.fname || group.groupName || 'Group',
        title: group.displayName || group.groupName || 'Group',
        details: `${group.displayName || group.groupName} (${group.shortName || ''}) - ${group.userType || 'USER'}`,
        type: (group.depthFromStart || 1) + 1,
        isOpen: true,
        progress: group.progress || 0,
        actions: [],
        children: (group.children || []).map((c: any) => mapGroupNode(c))
      };
    };

    const rootNode = {
      id: currentUser?.id || 1,
      uuid: currentUser?.uuid || 'user-uuid',
      name: currentUser?.username || 'admin',
      title: currentUser?.displayName || 'Administrator',
      details: `Logged in as ${currentUser?.role || 'ADMIN'}`,
      type: 1,
      isOpen: true,
      progress: 75,
      actions: [],
      children: mockRes.map(mapGroupNode)
    };

    return of(rootNode).pipe(
      tap(data => this.storage.saveHierarchy(data))
    );

    /* -- Original implementation (uncomment to restore once new API is live) --
    return this.http.get(this.apiUrl).pipe(
      map((res: any) => {
        const rawGroups = Array.isArray(res) ? res : [];
        const currentUser = this.authService.currentUserValue;

        const mapGroupNode = (group: any): any => {
          return {
            id: group.groupId,
            uuid: group.groupUuid,
            name: group.fname || group.groupName || 'Group',
            title: group.displayName || group.groupName || 'Group',
            details: `${group.displayName || group.groupName} (${group.shortName || ''}) - ${group.userType || 'USER'}`,
            type: (group.depthFromStart || 1) + 1,
            isOpen: true,
            progress: group.progress || 0,
            actions: [],
            children: (group.children || []).map((c: any) => mapGroupNode(c))
          };
        };

        return {
          id: currentUser?.id || 1,
          uuid: currentUser?.uuid || 'user-uuid',
          name: currentUser?.username || 'admin',
          title: currentUser?.displayName || 'Administrator',
          details: `Logged in as ${currentUser?.role || 'ADMIN'}`,
          type: 1,
          isOpen: true,
          progress: 75,
          actions: [],
          children: rawGroups.map(mapGroupNode)
        };
      }),
      tap(data => this.storage.saveHierarchy(data)),
      catchError(() => from(this.storage.getHierarchy()))
    );
    */
  }
}
