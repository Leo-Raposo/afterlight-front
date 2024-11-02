import { Component, OnInit, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swiper from 'swiper';
import { Mousewheel, Pagination } from 'swiper/modules';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { HomePage2Component } from '../home-page2/home-page2.component';
import { HomePage3Component } from '../home-page3/home-page3.component';
import { HomePage4Component } from '../home-page4/home-page4.component';

Swiper.use([Mousewheel, Pagination]);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomButtonComponent, HomePage2Component, HomePage3Component, HomePage4Component],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {
  swiper!: Swiper;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSwiper();
    }
  }

  initializeSwiper(): void {
    this.swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 0,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
}