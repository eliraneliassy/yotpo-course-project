import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import {AuthService} from "./auth.service";
import {AuthQuery} from "./auth/auth.query";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authQuery: AuthQuery) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return this.authQuery.username$.pipe(
      switchMap((username: string | null) => {
        request = request.clone(
          {
            setHeaders: {
              'token': username ? username : ''
            }
          }
        )
        return next.handle(request);
      })
    )





  }
}

