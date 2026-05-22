import { HttpInterceptorFn, HttpErrorResponse, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CookieService } from '../services/cookie.service';
import { catchError, switchMap, filter, take, throwError, BehaviorSubject, Observable } from 'rxjs';

// State flags and observable for queuing requests while refreshing
let isRefreshing = false;
const refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const cookieService = inject(CookieService);
  
  const addTokenHeader = (request: any, accessToken: string) => {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  };

  let authReq = req;
  const accessToken = cookieService.getCookie('accessToken');
  
  // Exclude refresh route from adding the potentially expired token to prevent loops
  if (accessToken && !req.url.includes('/auth/refresh')) {
    authReq = addTokenHeader(req, accessToken);
  }

  return next(authReq).pipe(
    catchError((error) => {
      // Catch 401 Unauthorized errors
      if (error instanceof HttpErrorResponse && error.status === 401 && !req.url.includes('/auth/login') && !req.url.includes('/auth/refresh')) {
        return handle401Error(authReq, next, authService);
      }
      return throwError(() => error);
    })
  );

  function handle401Error(request: HttpRequest<unknown>, nextHandler: HttpHandlerFn, auth: AuthService): Observable<HttpEvent<unknown>> {
    if (!isRefreshing) {
      isRefreshing = true;
      refreshTokenSubject.next(null);

      return auth.refreshToken().pipe(
        switchMap((tokenResponse: any) => {
          isRefreshing = false;
          // Notify any queued requests that the token is ready
          refreshTokenSubject.next(tokenResponse.accessToken);
          return nextHandler(addTokenHeader(request, tokenResponse.accessToken));
        }),
        catchError((err) => {
          isRefreshing = false;
          auth.logout(); // Critical failure, force user to sign in
          return throwError(() => err);
        })
      );
    } else {
      // If already refreshing, wait until the subject emits a valid token
      return refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(jwt => {
          return nextHandler(addTokenHeader(request, jwt));
        })
      );
    }
  }
};
