import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
})
export class VendorListComponent implements OnInit {
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  // For products
  public ven1: any = [
    { img: "assets/template-themes/becrux/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/2.png", name: "Ladies Jacket ", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/1.png", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/2.png", name: "Ladies Jackets", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/3.png", name: "DSLR Camera Lens ", price: "14.64", dPrice: "11.00", fav: false },
    { img: "assets/template-themes/becrux/images/item-images/4.png", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false }];

  constructor() {
  }

  ngOnInit() { }

}
