import { Component, OnInit } from '@angular/core';
import {  CartService, IProduct } from '../core'
import {  AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  
  cart: IProduct[] = [];
  constructor(private cartService: CartService,private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.rate * j.amount, 0);
  }

  
  async checkout() {

    const cartCount =  this.cart.length;
    this.cartService.clearCart();
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Thanks for your Order!',
      message: 'We will deliver your order as soon as possible',
      buttons: ['OK']
    });
    alert.present().then(() => {
      // this.modalCtrl.dismiss();
    });
  }

}
