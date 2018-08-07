import { Component, OnInit } from '@angular/core';

import { StateService, ApiService, AuthService } from "../core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private auth: AuthService,
    public state: StateService
  ) { }

  ngOnInit() { }

  login(data: any): void {
    this.apiService.login(data)
      .subscribe((res: any) => {
        this.state.popupMessage = res.message;

        if(res.status === 1){ // login successfully
          this.auth.loginSuccess();
          localStorage.setItem('isLogin', 'true');
        } else {
          localStorage.setItem('isLogin', 'false');
        }
        
      });
  }
}
