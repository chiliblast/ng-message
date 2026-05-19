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
    "groupId": 1,
    "parentGroupId": 0,
    "groupUuid": "root-1",
    "parentGroupUuid": null,
    "groupName": "root-1",
    "shortName": "R1",
    "displayName": "Root 1",
    "userType": "ADMIN",
    "fname": "L1",
    "progress": 0,
    "depthFromStart": 1,
    "children": [
      {
        "groupId": 11,
        "parentGroupId": 1,
        "groupUuid": "r1-l2-a",
        "parentGroupUuid": "root-1",
        "groupName": "r1-l2-a",
        "shortName": "R1A",
        "displayName": "R1 L2 A",
        "userType": "USER",
        "fname": "L2",
        "progress": 10,
        "depthFromStart": 2,
        "children": [
          {
            "groupId": 111,
            "parentGroupId": 11,
            "groupUuid": "r1-l3-a",
            "parentGroupUuid": "r1-l2-a",
            "groupName": "r1-l3-a",
            "shortName": "R1A1",
            "displayName": "R1 L3 A",
            "userType": "USER",
            "fname": "L3",
            "progress": 20,
            "depthFromStart": 3,
            "children": [
              {
                "groupId": 1111,
                "parentGroupId": 111,
                "groupUuid": "r1-l4-a1",
                "parentGroupUuid": "r1-l3-a",
                "groupName": "r1-l4-a1",
                "shortName": "R1A4-1",
                "displayName": "Leaf A1",
                "userType": "USER",
                "fname": "L4",
                "progress": 80,
                "depthFromStart": 4,
                "children": []
              },
              {
                "groupId": 1112,
                "parentGroupId": 111,
                "groupUuid": "r1-l4-a2",
                "parentGroupUuid": "r1-l3-a",
                "groupName": "r1-l4-a2",
                "shortName": "R1A4-2",
                "displayName": "Leaf A2",
                "userType": "USER",
                "fname": "L4",
                "progress": 81,
                "depthFromStart": 4,
                "children": []
              }
            ]
          },
          {
            "groupId": 112,
            "parentGroupId": 11,
            "groupUuid": "r1-l3-b",
            "parentGroupUuid": "r1-l2-a",
            "groupName": "r1-l3-b",
            "shortName": "R1B1",
            "displayName": "R1 L3 B",
            "userType": "USER",
            "fname": "L3",
            "progress": 21,
            "depthFromStart": 3,
            "children": [
              {
                "groupId": 1121,
                "parentGroupId": 112,
                "groupUuid": "r1-l4-b1",
                "parentGroupUuid": "r1-l3-b",
                "groupName": "r1-l4-b1",
                "shortName": "R1B4-1",
                "displayName": "Leaf B1",
                "userType": "USER",
                "fname": "L4",
                "progress": 82,
                "depthFromStart": 4,
                "children": []
              },
              {
                "groupId": 1122,
                "parentGroupId": 112,
                "groupUuid": "r1-l4-b2",
                "parentGroupUuid": "r1-l3-b",
                "groupName": "r1-l4-b2",
                "shortName": "R1B4-2",
                "displayName": "Leaf B2",
                "userType": "USER",
                "fname": "L4",
                "progress": 83,
                "depthFromStart": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },

  {
    "groupId": 2,
    "parentGroupId": 0,
    "groupUuid": "root-2",
    "parentGroupUuid": null,
    "groupName": "root-2",
    "shortName": "R2",
    "displayName": "Root 2",
    "userType": "ADMIN",
    "fname": "L1",
    "progress": 0,
    "depthFromStart": 1,
    "children": [
      {
        "groupId": 21,
        "parentGroupId": 2,
        "groupUuid": "r2-l2-a",
        "parentGroupUuid": "root-2",
        "groupName": "r2-l2-a",
        "shortName": "R2A",
        "displayName": "R2 L2 A",
        "userType": "USER",
        "fname": "L2",
        "progress": 10,
        "depthFromStart": 2,
        "children": [
          {
            "groupId": 211,
            "parentGroupId": 21,
            "groupUuid": "r2-l3-a",
            "parentGroupUuid": "r2-l2-a",
            "groupName": "r2-l3-a",
            "shortName": "R2A1",
            "displayName": "R2 L3 A",
            "userType": "USER",
            "fname": "L3",
            "progress": 20,
            "depthFromStart": 3,
            "children": [
              {
                "groupId": 2111,
                "parentGroupId": 211,
                "groupUuid": "r2-l4-a1",
                "parentGroupUuid": "r2-l3-a",
                "groupName": "r2-l4-a1",
                "shortName": "R2A4-1",
                "displayName": "Leaf A1",
                "userType": "USER",
                "fname": "L4",
                "progress": 80,
                "depthFromStart": 4,
                "children": []
              },
              {
                "groupId": 2112,
                "parentGroupId": 211,
                "groupUuid": "r2-l4-a2",
                "parentGroupUuid": "r2-l3-a",
                "groupName": "r2-l4-a2",
                "shortName": "R2A4-2",
                "displayName": "Leaf A2",
                "userType": "USER",
                "fname": "L4",
                "progress": 81,
                "depthFromStart": 4,
                "children": []
              }
            ]
          },
          {
            "groupId": 212,
            "parentGroupId": 21,
            "groupUuid": "r2-l3-b",
            "parentGroupUuid": "r2-l2-a",
            "groupName": "r2-l3-b",
            "shortName": "R2B1",
            "displayName": "R2 L3 B",
            "userType": "USER",
            "fname": "L3",
            "progress": 21,
            "depthFromStart": 3,
            "children": [
              {
                "groupId": 2121,
                "parentGroupId": 212,
                "groupUuid": "r2-l4-b1",
                "parentGroupUuid": "r2-l3-b",
                "groupName": "r2-l4-b1",
                "shortName": "R2B4-1",
                "displayName": "Leaf B1",
                "userType": "USER",
                "fname": "L4",
                "progress": 82,
                "depthFromStart": 4,
                "children": []
              },
              {
                "groupId": 2122,
                "parentGroupId": 212,
                "groupUuid": "r2-l4-b2",
                "parentGroupUuid": "r2-l3-b",
                "groupName": "r2-l4-b2",
                "shortName": "R2B4-2",
                "displayName": "Leaf B2",
                "userType": "USER",
                "fname": "L4",
                "progress": 83,
                "depthFromStart": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },

  {
    "groupId": 3,
    "parentGroupId": 0,
    "groupUuid": "root-3",
    "parentGroupUuid": null,
    "groupName": "root-3",
    "shortName": "R3",
    "displayName": "Root 3",
    "userType": "ADMIN",
    "fname": "L1",
    "progress": 100,
    "depthFromStart": 1,
    "children": [
      {
        "groupId": 31,
        "parentGroupId": 3,
        "groupUuid": "r3-l2-a",
        "parentGroupUuid": "root-3",
        "groupName": "r3-l2-a",
        "shortName": "R3A",
        "displayName": "R3 L2 A",
        "userType": "USER",
        "fname": "L2",
        "progress": 10,
        "depthFromStart": 2,
        "children": [
          {
            "groupId": 311,
            "parentGroupId": 31,
            "groupUuid": "r3-l3-a",
            "parentGroupUuid": "r3-l2-a",
            "groupName": "r3-l3-a",
            "shortName": "R3A1",
            "displayName": "R3 L3 A",
            "userType": "USER",
            "fname": "L3",
            "progress": 20,
            "depthFromStart": 3,
            "children": [
              {
                "groupId": 3111,
                "parentGroupId": 311,
                "groupUuid": "r3-l4-a1",
                "parentGroupUuid": "r3-l3-a",
                "groupName": "r3-l4-a1",
                "shortName": "R3A4-1",
                "displayName": "Leaf A1",
                "userType": "USER",
                "fname": "L4",
                "progress": 80,
                "depthFromStart": 4,
                "children": []
              },
              {
                "groupId": 3112,
                "parentGroupId": 311,
                "groupUuid": "r3-l4-a2",
                "parentGroupUuid": "r3-l3-a",
                "groupName": "r3-l4-a2",
                "shortName": "R3A4-2",
                "displayName": "Leaf A2",
                "userType": "USER",
                "fname": "L4",
                "progress": 81,
                "depthFromStart": 4,
                "children": []
              }
            ]
          },
          {
            "groupId": 312,
            "parentGroupId": 31,
            "groupUuid": "r3-l3-b",
            "parentGroupUuid": "root-3",
            "groupName": "r3-l3-b",
            "shortName": "R3B",
            "displayName": "R3 L3 B",
            "userType": "USER",
            "fname": "L3",
            "progress": 21,
            "depthFromStart": 3,
            "children": [
              {
                "groupId": 3121,
                "parentGroupId": 312,
                "groupUuid": "r3-l4-b1",
                "parentGroupUuid": "r3-l3-b",
                "groupName": "r3-l4-b1",
                "shortName": "R3B4-1",
                "displayName": "Leaf B1",
                "userType": "USER",
                "fname": "L4",
                "progress": 100,
                "depthFromStart": 4,
                "children": []
              },
              {
                "groupId": 3122,
                "parentGroupId": 312,
                "groupUuid": "r3-l4-b2",
                "parentGroupUuid": "r3-l3-b",
                "groupName": "r3-l4-b2",
                "shortName": "R3B4-2",
                "displayName": "Leaf B2",
                "userType": "USER",
                "fname": "L4",
                "progress": 83,
                "depthFromStart": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]
    const addUiFlags = (group: any): any => {
      const actions = [];
      const prog = group.progress || 0;
      
      if (prog >= 80) {
        actions.push({ id: 1, name: 'Active', color: '#10b981', label: 'A' });
      } else if (prog >= 40) {
        actions.push({ id: 2, name: 'Pending', color: '#f59e0b', label: 'B' });
      } else if (prog > 0) {
        actions.push({ id: 3, name: 'Suspended', color: '#ef4444', label: 'C' });
      } else {
        actions.push({ id: 4, name: 'Active', color: '#10b981', label: 'D' });
      }

      return {
        ...group,
        isOpen: true,
        actions,
        children: (group.children || []).map((c: any) => addUiFlags(c))
      };
    };

    return of(mockRes.map(addUiFlags)).pipe(
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
