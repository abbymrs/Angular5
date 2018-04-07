import { Component } from '@angular/core';

import { StateService, LoadingIndicatorService } from "./core";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  popupMsg: string = 'test popup message~';
  isLoading: Observable<boolean>;

  constructor(
    public state: StateService,
    private loadingIndicatorService: LoadingIndicatorService
  ){
    this.isLoading = this.loadingIndicatorService.onLoadingOnChanged;
  }

}
