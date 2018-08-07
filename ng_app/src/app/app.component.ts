import { Component, OnInit } from '@angular/core';

import { StateService, LoadingIndicatorService } from "./core";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  isLoading: Observable<boolean>;
  startTime: number = Date.now();

  constructor(
    public state: StateService,
    private loadingIndicatorService: LoadingIndicatorService
  ){
    this.isLoading = this.loadingIndicatorService.onLoadingOnChanged;
  }
  ngOnInit(): void {
    this.state.startTime = this.startTime;
    
  }
}
