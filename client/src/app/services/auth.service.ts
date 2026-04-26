import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const savedUser = localStorage.getItem('user');
    if (savedUser) this.userSubject.next(JSON.parse(savedUser));
  }

  login(credentials: any) {
    return this.http.post('http://localhost:3000/api/auth/login', credentials).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.userSubject.next(res.user);
      })
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
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
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/signin']);
  }
}
