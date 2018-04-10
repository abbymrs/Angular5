import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from "./config";


@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient,
        private config: ConfigService
    ) { }

    getUsers(): Observable<any> {
        return this.http.get(`${this.config.basedUrl}users`)
                    .pipe(
                        catchError(this.handleError)
                    )
    }

    login(data:any): Observable<any> {
        return this.http.post(`${this.config.basedUrl}users/login`, data)
                    .pipe(
                        catchError(this.handleError)
                    )
    }

    private handleError(err: HttpErrorResponse) {
        if (err.error instanceof ErrorEvent) {
            console.error('An error occurred:', err.error.message);
        } else {
            console.error(
                `Backend returned code ${err.status}, ` +
                `body was: ${err.error}`);
        }
        return new ErrorObservable(err.error);
    }
}