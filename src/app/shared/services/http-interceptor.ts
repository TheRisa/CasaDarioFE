import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      headers: request.headers.set('Access-Control-Allow-Origin', '*')
    });
    // request = request.clone({
    //   headers: request.headers.set(
    //     'Access-Control-Allow-Methods',
    //     'GET,PUT,POST,DELETE,OPTIONS'
    //   )
    // });
    // request = request.clone({
    //   headers: request.headers.set(
    //     'Access-Control-Allow-Headers',
    //     'Content-Type, Authorization, Content-Length, X-Requested-With'
    //   )
    // });

    return next.handle(request);
  }
}
