import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SwiperModule
  ],
  declarations: [
    PopupComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    SwiperModule,
    PopupComponent
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SharedModule { }
