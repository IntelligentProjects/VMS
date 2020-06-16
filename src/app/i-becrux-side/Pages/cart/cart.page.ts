import { Component, OnInit } from '@angular/core';

import { LoginPage } from '../login/login.page'

import { NavController, AlertController, ModalController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  value = 0;
  orders = [{ subTotal: "100.00", discount: "0.00", total: "100.00" }]
  public products = [
    { image: "assets/template-themes/becrux/category-images/top.jpg", name: "CLASSIC FIT SOFT-TOUCH POLO", price: "10.41" },
  ];
  constructor(public shared: SharedDataService,
    public config: ConfigService,
    public menuCtrl: MenuController,
    public nav: NavController,
    public alertController: AlertController,
    public modalCtrl: ModalController) {
  }
  ngOnInit() {
  }
  addQuantity() {
    this.value++;
  }
  minusQuantity() {
    if (this.value > 0) {
      this.value--;
    }
  }
  openShopPage() {
    this.nav.navigateForward("bs-products");
  }
  goToProductDetailPage() {
    this.nav.navigateForward("bs-product-detail");
  }
  async isCoupon() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Invalide Coupon Code!',
      buttons: ['OK']
    });
    await alert.present();
  }
  goToAddress() {
    this.nav.navigateForward("bs-shipping-address");
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
