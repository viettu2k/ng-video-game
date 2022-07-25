import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Key': '73342c306amshfa9f756f721a2d1p1ef8fejsn4abf64d9c783',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
      },
    });

    return next.handle(req);
  }
}
