import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { PopupComponent, PopupService } from './components/popup/popup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PopupComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    PopupComponent
  ],
  providers: [
    PopupService
  ]
})
export class SharedModule { }
