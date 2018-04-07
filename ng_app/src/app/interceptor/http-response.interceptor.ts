import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { tap } from "rxjs/operators";

import { LoadingIndicatorService } from "../core";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
    constructor(private loadingIndicatorService: LoadingIndicatorService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingIndicatorService.onStart(req);
        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        this.loadingIndicatorService.onFinished(req);
                    }
                }, err => {
                    this.loadingIndicatorService.onFinished(req);
                })
            )
    }
}