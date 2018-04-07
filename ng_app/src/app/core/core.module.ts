import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { httpInterceptorProviders } from "../interceptor";
import {
  StateService,
  ConfigService,
  ApiService,
  LoadingIndicatorService
} from "./service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    StateService,
    ConfigService,
    ApiService,
    LoadingIndicatorService
  ]
})
export class CoreModule { }
