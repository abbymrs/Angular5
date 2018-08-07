import { Component, OnInit } from '@angular/core';

import { 
  StateService,
  ApiService
} from "../core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  lang:string;
  users = <any>[];
  constructor(
    public state: StateService,
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    this.apiService.getUsers()
      .subscribe(res=>{
        // console.log(res);
        this.users = res;
      });
  }

  switchLang(){
    if(this.state.lang === 'en-us'){
      this.state.lang = 'zh-hk';
    } else {
      this.state.lang = 'en-us';
    }
  }
  getClassName(item){
    console.log(item.name)
    return item.name;
  }
}
