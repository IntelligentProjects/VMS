import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  //banner images
  slides = [
    "assets/template-themes/becrux/images/banner_images/1.jpg",
    "assets/template-themes/becrux/images/banner_images/2.jpg",
    "assets/template-themes/becrux/images/banner_images/3.jpg"
  ];
  constructor() { }

  ngOnInit() { }

}
