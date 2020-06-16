import { Component, OnInit } from '@angular/core';
import { ProductService, CartService } from '../core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  catDta: any = [];
  cart: any [] = [];
  sliderConfig = {
    slidesPerView: 1.4,
    spaceBetween: 10,
    centeredSlides: true
  };

  results: Observable<any>;
  searchTerm = '';

  constructor(public productService: ProductService, public cartService: CartService, public router: Router) { }

  ngOnInit() {
    this.getData();
    this.cart = this.cartService.getCart();

  }
  getData() {
    // this.productService.getMocksData().subscribe(resp => {
    //   this.catDta = resp;
    // })

    this.productService.getliveData().subscribe(resp => {
      console.log('status',resp['status']);
      this.catDta = resp['categories'];
    })

  }
  addToCart(product) {
    this.cart.push(product);
  }
  gotoCart() {
    this.router.navigate(['cart']);
  }

  searchChanged()
  {
    //this.results = this.productService.searchProducts(this.searchTerm);
  }

}
