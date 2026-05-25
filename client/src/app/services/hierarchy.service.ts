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
  
  generateTree(
  rootCount: number = 3,
  maxDepth: number = 4,
  minChildren: number = 2,
  maxChildren: number = 6
): any[] {

  let idCounter = 1;

  const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createNode = (
    depth: number,
    rootIndex: number,
    parentGroupId: number = 0,
    parentGroupUuid: string | null = null,
    path: string[] = []
  ): any => {

    const groupId = idCounter++;

    const groupUuid =
      depth === 1
        ? `root-${rootIndex}`
        : `r${rootIndex}-l${depth}-${path.join('')}`;

    const shortName =
      depth === 1
        ? `R${rootIndex}`
        : `R${rootIndex}${path.join('').toUpperCase()}`;

    const node: any = {
      groupId,
      parentGroupId,
      groupUuid,
      parentGroupUuid,
      groupName: groupUuid,
      shortName,
      displayName:
        depth === 1
          ? `Root ${rootIndex}`
          : `Level ${depth} ${path.join('-').toUpperCase()}`,
      userType: depth === 1 ? 'ADMIN' : 'USER',
      fname: `L${depth}`,
      progress: random(0, 100),
      depthFromStart: depth,
      children: []
    };

    // Create children recursively
    if (depth < maxDepth) {

      const childCount = random(minChildren, maxChildren);

      for (let i = 0; i < childCount; i++) {

        const char = String.fromCharCode(97 + i); // a,b,c,d...

        const child = createNode(
          depth + 1,
          rootIndex,
          groupId,
          groupUuid,
          [...path, char]
        );

        node.children.push(child);
      }
    }

    return node;
  };

  const roots: any[] = [];

  for (let i = 1; i <= rootCount; i++) {

    roots.push(
      createNode(1, i)
    );
  }

  return roots;
}




  getHierarchy(): Observable<any> {
    // TODO: Remove this mock response once real response is available
    // Usage
    const mockRes = this.generateTree(
      1, // roots
      4, // max depth
      2, // min children
      6  // max children
    );

    console.log(mockRes);
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
