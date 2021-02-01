import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return of(undefined).pipe(
      mergeMap(() => {
        if (req.url.indexOf('/notifications-service') !== -1 && req.method === 'GET') {
          return of(
            new HttpResponse({
              body: [],
              status: 200,
            }),
          );
        }
        return next.handle(req);
      }),
    );
  }
}
