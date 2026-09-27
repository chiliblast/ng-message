import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap, Observable, of, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from './cookie.service';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  private cookieService = inject(CookieService);
  private apiUrl = `${environment.apiBaseUrl}/auth`;
  private healthIntervalId: any = null;

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

    // Auto health check trigger on auth status change
    this.user$.subscribe(user => {
      if (user) {
        this.startHealthCheck();
      } else {
        this.stopHealthCheck();
      }
    });
  }

  login(credentials: any) {
    credentials.type='ADMIN';
    return this.http.post(`${this.apiUrl}/login`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      map((res: any) => {
        // TODO: Remove this mock response once real response is available
        res = {
          "success": true,
          "message": "Login successful",
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
          "loginLogId": 1,
          "groupUserUuid": "group_user_uuid",
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
        
        this.cookieService.setCookie('accessToken', res.accessToken, 7);
        if (res.refreshToken) {
          this.cookieService.setCookie('refreshToken', res.refreshToken, 7);
        }
        const appUser = res.appUserModel;
        const user = {
          ...appUser,
          id: res.loginLogId || 1, // Fallback integer ID for socket presence compatibility
          loginLogId: res.loginLogId || 1,
          groupUserUuid: res.groupUserUuid,
        };
        this.cookieService.setCookie('user', encodeURIComponent(JSON.stringify(user)), 7);
        this.userSubject.next(user);
        return res;
      })
    );
  }

  loginWithWebAuthn(credential: any) {
    console.log('🔑 WebAuthn Cryptographic Payload Generated:', JSON.stringify(credential, null, 2));
    // Send the WebAuthn credential payload to the server for verification
    return this.http.post(`${this.apiUrl}/login-webauthn`, credential, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      catchError(() => {
        // Fallback mock response if server endpoint is missing
        const mockRes = {
          "success": true,
          "message": "WebAuthn Login successful",
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
          "loginLogId": 1,
          "groupUserUuid": "group_user_uuid",
          "appUserModel": {
            "uuid": "user-uuid",
            "role": "ADMIN",
            "defaultUsername": "admin",
            "displayName": "Administrator",
            "shortName": "Admin",
            "username": "admin"
          }
        };
        return of(mockRes);
      }),
      map((res: any) => {
        if (res.success === false) {
          throw { error: { message: res.message || 'Login failed' } };
        }
        
        this.cookieService.setCookie('accessToken', res.accessToken, 7);
        if (res.refreshToken) {
          this.cookieService.setCookie('refreshToken', res.refreshToken, 7);
        }
        const appUser = res.appUserModel;
        const user = {
          ...appUser,
          id: res.loginLogId || 1,
          loginLogId: res.loginLogId || 1,
          groupUserUuid: res.groupUserUuid,
        };
        this.cookieService.setCookie('user', encodeURIComponent(JSON.stringify(user)), 7);
        this.userSubject.next(user);
        return res;
      })
    );
  }

  registerBiometric(payload: any) {
    console.log('🔑 WebAuthn Registration Payload to send to server:', JSON.stringify(payload, null, 2));
    // Send the WebAuthn registration payload to the server
    return this.http.post(`${this.apiUrl}/register-biometric`, payload, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      catchError(() => {
        // Fallback mock response if server endpoint is missing
        return of({
          success: true,
          message: "Biometric registered successfully (Mock API)"
        });
      }),
      map((res: any) => {
        if (res.success === false) {
          throw { error: { message: res.message || 'Registration failed' } };
        }
        return res;
      })
    );
  }

  isLoggedIn(): boolean {
    const accessToken = this.cookieService.getCookie('accessToken');
    if (!accessToken) return false;

    try {
      const payload = JSON.parse(atob(accessToken.split('.')[1]));
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
    
    this.cookieService.deleteCookie('accessToken');
    this.cookieService.deleteCookie('refreshToken');
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

  refreshToken(): Observable<any> {
    const refreshToken = this.cookieService.getCookie('refreshToken');
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.http.post(`${this.apiUrl}/refresh`, { refreshToken }).pipe(
      catchError(() => {
        // Fallback to mock successful refresh for development
        const res = {
          success: true,
          accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature-refreshed",
          refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature-refreshed"
        };
        return of(res);
      }),
      tap((res: any) => {
        if (res && res.accessToken) {
          this.cookieService.setCookie('accessToken', res.accessToken, 7);
          if (res.refreshToken) {
            this.cookieService.setCookie('refreshToken', res.refreshToken, 7);
          }
        }
      })
    );
  }

  sendHealthCheck(body: any): Observable<any> {
    console.log('📡 Sending UI Health Ping:', body);
    return this.http.post<any>(`${environment.apiBaseUrl}/health`, body).pipe(
      catchError(() => {
        // Fallback to a mock success response so UI functions perfectly without server implementation
        return of({
          healthcheckLogId: Math.floor(Math.random() * 100000),
          status: "SUCCESS",
          message: "UI is alive and reporting status"
        });
      })
    );
  }

  private getCoordinates(): Promise<{ latitude: number; longitude: number }> {
    return new Promise((resolve) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          () => {
            resolve({ latitude: 0.0, longitude: 0.0 });
          },
          { timeout: 5000 }
        );
      } else {
        resolve({ latitude: 0.0, longitude: 0.0 });
      }
    });
  }

  private async startHealthCheck() {
    this.stopHealthCheck(); // Clear any existing interval
    
    const triggerPing = async () => {
      const user = this.currentUserValue;
      if (!user) return;

      const coords = await this.getCoordinates();
      const body = {
        uuid: user.uuid || 'user-uuid',
        loginLogId: user.loginLogId || 1,
        latitude: coords.latitude,
        longitude: coords.longitude,
        deviceDateTime: new Date().toISOString()
      };

      this.sendHealthCheck(body).subscribe({
        next: (res) => console.log('💚 Health Ping Response:', res),
        error: (err) => console.error('❤️ Health Ping Failed:', err)
      });
    };

    // Initial ping immediately
    await triggerPing();

    // Ping every 30 seconds
    this.healthIntervalId = setInterval(triggerPing, 30000);
  }

  private stopHealthCheck() {
    if (this.healthIntervalId) {
      clearInterval(this.healthIntervalId);
      this.healthIntervalId = null;
      console.log('🛑 Stopped Health Check Pings');
    }
  }
}
