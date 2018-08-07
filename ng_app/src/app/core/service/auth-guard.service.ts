import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { StateService } from "./state.service";

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(
        private router: Router,
        private state: StateService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{
        let url = state.url;
        return this.checkLogin(url);
    }

    checkLogin(url:string): Observable<boolean>{
        let timeout = 1000 * 60 * 60;
        if(Date.now() - this.state.startTime > timeout) localStorage.removeItem('isLogin');
        let isLogin = localStorage.getItem('isLogin');
        if(this.state.isLogin || (isLogin && isLogin==='true')) return Observable.of(true);

        this.state.redirectUrl = url;
        this.router.navigate(['/login']);
        return Observable.of(false);
    }
}