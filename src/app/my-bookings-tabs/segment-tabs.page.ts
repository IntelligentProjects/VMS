import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-segment-header-text',
  templateUrl: './segment-tabs.page.html',
  styleUrls: ['./segment-tabs.page.scss'],
  animations: [
    trigger('itemState', [
      transition('void => *', [
          style({transform: 'translateX(200%)'}),
          animate('300ms ease-in')
      ])
  ])
]
})
export class SegmentHeaderTextPage implements OnInit {
  segments: any = 'segmentOne';
  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0 
    };
  //for segment one
  public items = [
    {
      id:'0',
      name: "Bed",
      price: "250",
      img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png"
    },
    {
      id:'1',
      name: "Dress",
      price: "1800",
      img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png"
    },
    {
      id:'2',
      name: "Stand",
      price: "3200",
      img: "assets/images/Pictures/app-slicing/cell_phone_stand.png"
    },
    {
      id:'3',
      name: "Chair",
      price: "1200",
      img: "assets/images/Pictures/app-slicing/red_and_black_chair.png"
    }
  ];

//for segment two
    private data = [
      {
        category: 'Product Category One',
        expanded: false,
        products: [
          { id: 0, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 1, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 2, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
          { id: 3, name: 'Red Chair', price: '70', image:"assets/images/Pictures/app-slicing/red_and_black_chair.png" }
        ]
      },
      {
        category: 'Product Category Two',
        products: [
          { id: 4, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 5, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product Category Three',
        products: [
          { id: 6, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 7, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 8, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
          { id: 9, name: 'Red Chair', price: '70', image:"assets/images/Pictures/app-slicing/red_and_black_chair.png" }
        ]
      },
      {
        category: 'Product Category Four',
        products: [
          { id: 10, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 11, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product category Five',
        products: [
          { id: 12, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 13, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 14, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
          { id: 15, name: 'Red Chair', price: '70', image:"assets/images/Pictures/app-slicing/red_and_black_chair.png" }
        ]
      },
      {
        category: 'Product Category Six',
        products: [
          { id: 16, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 17, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product Category Seven',
        products: [
          { id: 18, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 19, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 20, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
        ]
      },
      {
        category: 'Product Category Eight',
        products: [
          { id: 21, name: 'Baby Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 22, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product Category Nine',
        products: [
          { id: 23, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 24, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 25, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
          { id: 26, name: 'Red Chair', price: '70', image:"assets/images/Pictures/app-slicing/red_and_black_chair.png" }
        ]
      },
      {
        category: 'Product Category Ten',
        products: [
          { id: 27, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 28, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product Category One',
        expanded: false,
        products: [
          { id: 0, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 1, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 2, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
          { id: 3, name: 'Red Chair', price: '70', image:"assets/images/Pictures/app-slicing/red_and_black_chair.png" }
        ]
      },
      {
        category: 'Product Category Two',
        products: [
          { id: 4, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 5, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product Category Three',
        products: [
          { id: 6, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 7, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 8, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
          { id: 9, name: 'Red Chair', price: '70', image:"assets/images/Pictures/app-slicing/red_and_black_chair.png" }
        ]
      },
      {
        category: 'Product Category Four',
        products: [
          { id: 10, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 11, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product category Five',
        products: [
          { id: 12, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 13, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 14, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
          { id: 15, name: 'Red Chair', price: '70', image:"assets/images/Pictures/app-slicing/red_and_black_chair.png" }
        ]
      },
      {
        category: 'Product Category Six',
        products: [
          { id: 16, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 17, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product Category Seven',
        products: [
          { id: 18, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 19, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 20, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
        ]
      },
      {
        category: 'Product Category Eight',
        products: [
          { id: 21, name: 'Baby Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 22, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
      {
        category: 'Product Category Nine',
        products: [
          { id: 23, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 24, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
          { id: 25, name: 'Stand', price: '190', image:"assets/images/Pictures/app-slicing/cell_phone_stand.png" },
          { id: 26, name: 'Red Chair', price: '70', image:"assets/images/Pictures/app-slicing/red_and_black_chair.png" }
        ]
      },
      {
        category: 'Product Category Ten',
        products: [
          { id: 27, name: 'Bed', price: '80', image:"assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
          { id: 28, name: 'Girl Dress', price: '50', image:"assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
        ]
      },
    ];

    //for segment three
  public itemsList = [
    { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice:"15", price:"10" },
    { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png",dprice:"18", price:"12" },
    { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png",dprice:"15", price:"13" },
    { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice:"19", price:"16" },
    { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png",dprice:"15", price:"7" },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png",dprice:"25", price:"20" },
    { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png",dprice:"45", price:"40" },
    { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png",dprice:"55", price:"32" },
    { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice:"15", price:"9",},
    { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png",dprice:"25", price:"16" },
    { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png",dprice:"15", price:"7" },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png",dprice:"25", price:"20" },
    { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice:"15", price:"10" },
    { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png",dprice:"18", price:"12" },
    { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png",dprice:"15", price:"13" },
    { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice:"19", price:"16" },
    { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png",dprice:"15", price:"7" },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png",dprice:"25", price:"20" },
  ];
  constructor() { }
  ngOnInit() {
  }
}