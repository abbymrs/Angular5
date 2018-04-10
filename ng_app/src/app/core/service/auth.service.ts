import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { StateService } from "./state.service";

@Injectable()
export class AuthService {

    constructor(
        private router: Router,
        private state: StateService
    ) { }

    loginSuccess(): void {
        this.state.isLogin = true;
        this.router.navigate([this.state.redirectUrl]);
    }

    logout(): void {
        this.state.isLogin = false;
    }
}