import { Injectable } from "@angular/core";
import { HttpRequest, HttpResponse } from "@angular/common/http";

export interface ResponseEntry {
    url: string;
    response: HttpResponse<any>;
    lastRead: number;
}

export abstract class RequestCache {
    abstract get(req: HttpRequest<any>): HttpResponse<any> | undefined;
    abstract put(req: HttpRequest<any>, res: HttpResponse<any>): void;
}

let maxAge = 1000 *10;

@Injectable()
export class CacheService implements RequestCache {
    cache = new Map<string, ResponseEntry>();

    get(req:HttpRequest<any>): HttpResponse<any> | undefined {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);

        if(!cached) return undefined;

        const isExpired = Date.now() - cached.lastRead > maxAge;
        return isExpired ? undefined : cached.response;
    }

    put(req: HttpRequest<any>, res: HttpResponse<any>): void {
        const url = req.urlWithParams;
        const entry = {
            url,
            response: res,
            lastRead: Date.now()
        };
        this.cache.set(url, entry);

        const time = Date.now() - maxAge;
        this.cache.forEach(item=>{
            if(item.lastRead < time) this.cache.delete(item.url);
        });
    }
}