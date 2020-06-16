import { Component, OnInit } from '@angular/core';

import { ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { SelectCountryPage } from '../../select-country/select-country.page';
import { SelectZonesPage } from '../../select-zones/select-zones.page';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.page.html',
  styleUrls: ['./shipping-address.page.scss'],
})
export class ShippingAddressPage implements OnInit {
  billing = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email: '',
    phone: ''
  };
  billingCountryName = "";
  billingStateName = "";
  shipping = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: ''
  };
  shippingCountryName = "";
  shippingStateName = "";
  constructor(public shared: SharedDataService,
    public appEventsService: AppEventsService,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public config: ConfigService,
    public nav: NavController,
    public loadingController: LoadingController) {
  }
  ngOnInit() {
  }

  async selectCountryPage(value) {
    let modal = await this.modalCtrl.create({
      component: SelectCountryPage
    });
    return await modal.present();
  }

  async selectZonePage(value) {
    let modal = await this.modalCtrl.create({
      component: SelectZonesPage
    });
    return await modal.present();
  }
  goToBillingAddress() {
    this.nav.navigateForward("bb-billing-address");
  }
  goToCart(){
    this.nav.navigateForward("bb-cart");
  }
  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Please Wait...',
      duration: 2000
    });
    await loading.present();
  }
  pinchEvent(e) {
    this.appEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.nav.navigateForward("ui-templates-details");  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
    }
}
