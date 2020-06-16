import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.page.html',
  styleUrls: ['./shipping-method.page.scss'],
})
export class ShippingMethodPage implements OnInit {
  shippingMethod = [{ title: "Free Shipping", cost: "100" }];
  constructor(public menuCtrl: MenuController,
    public nav: NavController) { }

  ngOnInit() {
  }
  proceedOrder() {
    this.nav.navigateForward("bs-order");
  }
  goToBillingAddress() {
    this.nav.navigateForward("bs-billing-address");

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
