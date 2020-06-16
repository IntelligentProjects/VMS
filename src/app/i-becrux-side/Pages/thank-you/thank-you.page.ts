import { Component, OnInit } from '@angular/core';

import { NavController, MenuController } from '@ionic/angular';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {

  constructor(public menuCtrl: MenuController,
    public config: ConfigService, public shared: SharedDataService, public nav: NavController) { }
  goToProductPage() {
    this.nav.navigateForward("bs-products");
  }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  goToOrderPage() {
    this.nav.navigateForward("bs-my-orders");
  }
  goToSearchPage() {
    this.nav.navigateForward("bs-search");

  }
  ngOnInit() {
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
