import { Component, OnInit } from '@angular/core';

import { StateService } from "../core";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  lang: string = '';
  constructor(public state: StateService) { }

  ngOnInit() {}


}
