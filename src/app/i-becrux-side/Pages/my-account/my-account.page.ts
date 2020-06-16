import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LoadingController, NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {

  myAccountData = {
    first_name: '',
    last_name: ''
  };

  password = '';

  constructor(    public menuCtrl: MenuController,
     public shared: SharedDataService, public config: ConfigService, translate: TranslateService, public loadingController:LoadingController, public nav:NavController) { }

  ngOnInit() {
  }
  async isUpdated() {
    const loading = await this.loadingController.create({
      spinner: 'crescent',
      duration: 2000
    });
    return await loading.present();
  }
  goToCartPage(){
    this.nav.navigateForward("bs-cart");
  }
  goToSearchPage(){
    this.nav.navigateForward("bs-search");
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
