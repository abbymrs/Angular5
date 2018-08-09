import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";

import { CacheService, ResponseEntry, RequestCache } from "../core/service";

let cachedUrls = ["/api/users"];

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!isCachable(req)) return next.handle(req);

    let cacheResponse = this.cacheService.get(req);
    return cacheResponse
      ? Observable.of(cacheResponse)
      : sendRequest(this.cacheService, req, next);
  }
}

function sendRequest(
  cache: RequestCache,
  req: HttpRequest<any>,
  next: HttpHandler
) {
  return next.handle(req).pipe(
    tap(res => {
      if (res instanceof HttpResponse) {
        cache.put(req, res);
      }
    })
  );
}

function isCachable(req: HttpRequest<any>): boolean {
  return (
    req.method === "GET" && cachedUrls.some(url => req.url.indexOf(url) > -1)
  );
}
