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
    let baseURL = "http://52.66.235.25/toprides-server/";
    // let baseURL = "http://localhost/toprides/";

    request = request.clone({
      // url: baseURL + request.url
      url: "https://cors-anywhere.herokuapp.com/" + baseURL + request.url
      // headers: request.headers.append("Access-Control-Allow-Origin", "*")
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      })
    );
  }
}
