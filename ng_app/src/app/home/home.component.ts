import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { StateService, ApiService } from "../core";
import { PopupService } from "../shared/components/popup/popup.component";

@Component({
  selector: "app-home",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  lang: string;
  users = <any>[];
  constructor(
      public state: StateService, 
      private apiService: ApiService,
      private popupService: PopupService
    ) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe(res => {
      // console.log(res);
      this.users = res;
    });
  }

  switchLang() {
    if (this.state.lang === "en-us") {
      this.state.lang = "zh-hk";
    } else {
      this.state.lang = "en-us";
    }
  }
  open(): void {
      this.state.popupMessage = 'test popup message';
    this.popupService.open();
  }
}
