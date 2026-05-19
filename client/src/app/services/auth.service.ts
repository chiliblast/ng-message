import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from './cookie.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  private cookieService = inject(CookieService);
  private apiUrl = `${environment.apiBaseUrl}/auth`;

  get currentUserValue() {
    return this.userSubject.value;
  }

  constructor(private http: HttpClient, private router: Router) {
    const savedUser = this.cookieService.getCookie('user');
    if (savedUser) this.userSubject.next(JSON.parse(decodeURIComponent(savedUser)));

    // CROSS-TAB SYNC: Listen for storage changes (using a dummy key for logout)
    window.addEventListener('storage', (event) => {
      if (event.key === 'logout-event') {
        console.log('🚪 Logout detected in another tab. Syncing...');
        this.handleLocalLogout();
      }
    });
  }

  login(credentials: any) {
    credentials.type='ADMIN';
    return this.http.post(`${this.apiUrl}/login`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      tap((res: any) => {
        // TODO: Remove this mock response once real response is available
        res = {
          "success": true,
          "message": "Login successful",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
          "loginLogId": 1,
          "appUserModel": {
            "uuid": "user-uuid",
            "role": "ADMIN",
            "defaultUsername": "admin",
            "displayName": "Administrator",
            "shortName": "Admin",
            "username": "admin"
          }
        };

        if (res.success === false) {
          throw { error: { message: res.message || 'Login failed' } };
        }
        
        this.cookieService.setCookie('token', res.token, 7);
        const appUser = res.appUserModel;
        const user = {
          ...appUser,
          id: res.loginLogId || 1, // Fallback integer ID for socket presence compatibility
        };
        this.cookieService.setCookie('user', encodeURIComponent(JSON.stringify(user)), 7);
        this.userSubject.next(user);
      })
    );
  }

  isLoggedIn(): boolean {
    const token = this.cookieService.getCookie('token');
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      if (isExpired) {
        this.logout();
        return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  logout() {
    const user = this.userSubject.value;
    if (user) {
      this.http.post(`${this.apiUrl}/logout-global`, { userId: user.id }).subscribe();
    }
    
    this.cookieService.deleteCookie('token');
    this.cookieService.deleteCookie('user');
    
    // Trigger cross-tab sync
    localStorage.setItem('logout-event', Date.now().toString());
    localStorage.removeItem('logout-event');

    this.handleLocalLogout();
  }

  private handleLocalLogout() {
    this.userSubject.next(null);
    this.router.navigate(['/signin']);
  }
}
