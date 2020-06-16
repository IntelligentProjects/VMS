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
    "assets/garages/truck1.jpg",
    "assets/garages/truck2.jpg",
    "assets/garages/truck3.jpg"
  ];
  constructor() { }

  ngOnInit() { }

}
