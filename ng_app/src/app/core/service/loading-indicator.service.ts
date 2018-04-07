import { Injectable, EventEmitter } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class LoadingIndicatorService {

    onLoadingOnChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    private requests: HttpRequest<any>[] = [];

    onStart(req: HttpRequest<any>): void {
        this.requests.push(req);
        this.notify();
    }

    onFinished(req: HttpRequest<any>): void{
        const idx = this.requests.indexOf(req);
        if(idx !== -1){
            this.requests.splice(idx,1);
        }
        this.notify();
    }
    notify(): void {
        this.onLoadingOnChanged.emit(this.requests.length !== 0);
    }
}