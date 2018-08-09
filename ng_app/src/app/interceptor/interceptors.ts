import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { HttpResponseInterceptor } from "./http-response.interceptor";
import { CacheInterceptor } from "./cache.interceptor";

export const httpInterceptorProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: HttpResponseInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true}
];