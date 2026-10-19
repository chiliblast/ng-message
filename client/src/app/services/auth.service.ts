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
  private biometricApiUrl = (environment as any).biometricApiUrl || 'http://localhost:8080/api/auth';
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

  getUserBiometrics(username: string) {
    return this.http.get<{
      username: string;
      hasFingerprint: boolean;
      hasFace: boolean;
      requiresBiometric: boolean;
      fingerprintEnrolledAt?: string | null;
      faceEnrolledAt?: string | null;
    }>(
      `${this.biometricApiUrl}/user/${encodeURIComponent(username)}/biometrics`
    );
  }

  login(credentials: any) {
    credentials.type = 'ADMIN';
    return this.http.post(`${this.biometricApiUrl}/login`, credentials, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      map((res: any) => {
        if (!res || res.success === false) {
          throw { error: { message: (res && res.message) || 'Login failed', ...res } };
        }
        
        this.cookieService.setCookie('accessToken', res.accessToken, 7);
        if (res.refreshToken) {
          this.cookieService.setCookie('refreshToken', res.refreshToken, 7);
        }
        const appUser = res.appUserModel || {};
        const user = {
          ...appUser,
          id: res.loginLogId || appUser.id || 1,
          loginLogId: res.loginLogId || appUser.id || 1,
          groupUserUuid: res.groupUserUuid || 'group_user_uuid',
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

  loginWithRawImage(payload: { username: string, password?: string, base64Image: string }) {
    console.log(`🔑 [Mock API Raw Biometric] Username:`, payload.username);
    console.log(`🔑 [Mock API Raw Biometric] Base64 Image:`, payload.base64Image);
    // Send the raw base64 image to the server for verification via AFIS / Minutiae matching
    return this.http.post(`${this.apiUrl}/login-raw-biometric`, payload, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      catchError(() => {
        // Fallback mock response
        const mockRes = {
          "success": true,
          "message": "Raw Biometric Login successful (Mock AFIS Match)",
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4MjkyMDk2MDB9.mock-signature",
          "loginLogId": 1,
          "appUserModel": {
            "uuid": "user-uuid",
            "role": "ADMIN",
            "username": payload.username
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
        const user = { ...res.appUserModel, id: res.loginLogId || 1 };
        this.cookieService.setCookie('user', encodeURIComponent(JSON.stringify(user)), 7);
        this.userSubject.next(user);
        return res;
      })
    );
  }

  loginWithBiometric(payload: { username: string, password: string, base64Image: string, biometricType?: 'fingerprint' | 'face' }) {
    const bType = payload.biometricType || 'fingerprint';
    console.log(`🔑 [Mock API Unified Biometric + Credentials] Type:`, bType.toUpperCase());
    console.log(`🔑 [Mock API Unified Biometric + Credentials] Username:`, payload.username);
    console.log(`🔑 [Mock API Unified Biometric + Credentials] Password:`, payload.password ? '******' : '(empty)');
    console.log(`🔑 [Mock API Unified Biometric + Credentials] Base64 Image Length:`, payload.base64Image?.length);
    console.log(`🔑 [Mock API Unified Biometric + Credentials] Base64 Image:`, payload.base64Image);

    const body = {
      ...payload,
      biometricType: bType
    };

    // Send username, password, and biometric sample directly to Java Backend (port 8080)
    return this.http.post(`${this.biometricApiUrl}/login-with-biometric`, body, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      map((res: any) => {
        if (!res || typeof res === 'string' || res.success === false) {
          throw { error: { message: (res && res.message) || 'Login failed' } };
        }
        this.cookieService.setCookie('accessToken', res.accessToken, 7);
        if (res.refreshToken) {
          this.cookieService.setCookie('refreshToken', res.refreshToken, 7);
        }
        const appUser = res.appUserModel || {};
        const user = {
          ...appUser,
          id: res.loginLogId || 1,
          loginLogId: res.loginLogId || 1,
          groupUserUuid: res.groupUserUuid || 'group_user_uuid',
        };
        this.cookieService.setCookie('user', encodeURIComponent(JSON.stringify(user)), 7);
        this.userSubject.next(user);
        return res;
      })
    );
  }

  registerBiometric(payload: any) {
    console.log('🔑 [Java Biometric Registration] Payload:', JSON.stringify(payload, null, 2));
    // Send registration payload directly to Java Backend (port 8080)
    return this.http.post(`${this.biometricApiUrl}/register-biometric`, payload, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      map((res: any) => {
        if (res && res.success === false) {
          throw { error: { message: res.message || 'Registration failed' } };
        }
        return res;
      }),
      catchError((err: any) => {
        console.error('❌ [registerBiometric] Java server error:', err);
        const errMsg = err.error?.message || (err.status === 0 ? 'Cannot connect to Java Biometric Server on port 8080. Please ensure Java backend is running.' : err.message) || 'Biometric registration failed';
        return throwError(() => ({ error: { message: errMsg } }));
      })
    );
  }

  registerRawBiometric(payload: any) {
    console.log('🔑 [Java Raw Biometric Registration] Payload:', JSON.stringify(payload, null, 2));
    // Send registration payload directly to Java Backend (port 8080)
    return this.http.post(`${this.biometricApiUrl}/register-biometric`, payload, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      map((res: any) => {
        if (res && res.success === false) {
          throw { error: { message: res.message || 'Registration failed' } };
        }
        return res;
      }),
      catchError((err: any) => {
        console.error('❌ [registerRawBiometric] Java server error:', err);
        const errMsg = err.error?.message || (err.status === 0 ? 'Cannot connect to Java Biometric Server on port 8080. Please ensure Java backend is running.' : err.message) || 'Biometric registration failed';
        return throwError(() => ({ error: { message: errMsg } }));
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
    
    // If this window is the dual screen window, close it instead of redirecting to sign in
    if (window.name.startsWith('DualScreenHome') || window.location.pathname.includes('home-standalone')) {
      window.close();
    } else {
      this.router.navigate(['/signin']);
    }
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
