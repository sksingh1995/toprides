import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError, delay } from "rxjs/operators";
import { API_URL } from "../config/const";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const token: string = localStorage.getItem("token");

    // if (token) {
    //   request = request.clone({
    //     headers: request.headers.set("Authorization", "Bearer " + token)
    //   });
    // }

    // if (!request.headers.has("Content-Type")) {
    //   request = request.clone({
    //     headers: request.headers.set("Content-Type", "application/json")
    //   });
    // }

    request = request.clone({
      url: API_URL + request.url
      // headers: request.headers.append("Access-Control-Allow-Origin", "*")
    });

    return next.handle(request).pipe(
      // delay(5000),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      })
    );
  }
}
