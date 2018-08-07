import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";

import { ApiService } from "../core/service";

declare let Swiper;

@Component({
  selector: "app-profile",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"]
})
export class ProfileComponent implements OnInit, OnDestroy {
  banners = <any>[];
  slider: any;
  timer: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBanners().subscribe(data => {
      //console.log(data);
      this.banners = data;
      if(data.length > 0){
        this.timer = setTimeout(_=>{
          this.initSlider();
        })
      }
    });
  }
  ngOnDestroy(): void {
    if(this.slider) this.slider.destroy();
    clearTimeout(this.timer);
  }

  initSlider() {
    this.slider = new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
}
