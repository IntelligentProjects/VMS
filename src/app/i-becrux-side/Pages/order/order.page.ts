import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  order = [
    { name: "Straight Long Coat", price: "USD 100.00", quantity: "1", total: "USD 100.00", img: "assets/template-themes/becrux/images/item-images/26.jpg" },
  ];
  paymentMethods = ["Direct bank transfer", "Cash on delivery"];
  orders = [{ shipping_tax: "USD 0.00", shipping_total: "USD 0.00", discount_total: "USD 0.00", total: "USD 188.00" }]
  product = [{ name:"Straight Long Coat",price: "95.00", quantity:"1", subtotal:"95.00", total:"95.00", img: "assets/template-themes/becrux/images/item-images/26.jpg" }];

  constructor(public menuCtrl: MenuController,
    public nav: NavController) { }
  goToThankYouPage() {
    this.nav.navigateForward("bs-thank-you");
  }
  ngOnInit() {
  }
  goToShippingMethod() {
    this.nav.navigateBack("bs-shipping-method");
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}
