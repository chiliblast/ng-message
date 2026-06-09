import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, catchError, from, of, map, BehaviorSubject } from 'rxjs';
import { OfflineStorageService } from './offline-storage.service';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HierarchyService {
  private http = inject(HttpClient);
  private storage = inject(OfflineStorageService);
  private authService = inject(AuthService);
  private apiUrl = `${environment.apiBaseUrl}/hierarchy`;
  
  private selectedNodesSubject = new BehaviorSubject<any[]>([]);
  public selectedNodes$ = this.selectedNodesSubject.asObservable();

  setSelectedNodes(nodes: any[]) {
    this.selectedNodesSubject.next(nodes);
  }

  getSelectedNodes(): any[] {
    return this.selectedNodesSubject.value;
  }
  
  generateTree(
    rootCount: number = 3,
    maxDepth: number = 4,
    minChildren: number = 2,
    maxChildren: number = 6,
    startingDepthFromStart: number = 1
  ): any[] {

  let idCounter = 1;

  const random = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomColor = (): string => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  };

  const createNode = (
    depth: number,
    rootIndex: number,
    parentGroupId: number = 0,
    parentGroupUuid: string | null = null,
    path: string[] = [],
    targetMaxDepth: number = maxDepth
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
      depthFromStart: startingDepthFromStart + depth - 1,
      currentMessageColor: randomColor(),
      currentMessageName:"Active",
      currentMessageShortName:"Act",
      currentMessageId : random(1, 3),
      assignedMessageColor: randomColor(),
      assignedMessageName:"Active",
      assignedMessageShortName:"Act",
      assignedMessageId : random(1, 3),
      children: []
    };

    // Create children recursively
    if (depth < targetMaxDepth) {

      const childCount = random(minChildren, maxChildren);

      for (let i = 0; i < childCount; i++) {

        const char = String.fromCharCode(97 + i); // a,b,c,d...

        const child = createNode(
          depth + 1,
          rootIndex,
          groupId,
          groupUuid,
          [...path, char],
          random(depth + 1, maxDepth)
        );

        node.children.push(child);
      }
    }

    return node;
  };

  const roots: any[] = [];

  for (let i = 1; i <= rootCount; i++) {
    const rootMaxDepth = random(1, maxDepth);
    roots.push(
      createNode(1, i, 0, null, [], rootMaxDepth)
    );
  }

  return roots;
}




  private cachedHierarchy: any[] | null = null;

  getHierarchy(): Observable<any> {
    if (this.cachedHierarchy) {
      return of(this.cachedHierarchy);
    }
    
    // TODO: Remove this mock response once real response is available
    // Usage
    const mockRes = this.generateTree(
      3, // roots
      5, // max depth
      1, // min children
      6, // max children
      0  // starting depthFromStart
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

    this.cachedHierarchy = mockRes.map(addUiFlags);

    return of(this.cachedHierarchy).pipe(
      tap(data => this.storage.saveHierarchy(data))
    );

    
  }
}
