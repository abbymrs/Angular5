import { Component, OnInit } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { ApiService } from "../core/service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  banners = <any>[];
  config: SwiperConfigInterface = {
    loop: true,
    loopedSlides: 3,
    centeredSlides: true,
    navigation: true
  };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBanners()
      .subscribe(data=>{
        console.log(data);
        this.banners = data;
      })
  }

}
