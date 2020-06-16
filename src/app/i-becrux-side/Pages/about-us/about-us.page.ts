import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../providers/config/config.service';

import { TranslateService } from '@ngx-translate/core';
import { ModalController, NavController, MenuController, ToastController } from '@ionic/angular';

import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { TermServicesPage } from '../term-services/term-services.page';
import { RefundPolicyPage } from '../refund-policy/refund-policy.page';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  constructor(public toastController: ToastController, private service: CustomThemeService, public menuCtrl: MenuController, public shared: SharedDataService, public config: ConfigService, translate: TranslateService, public modalCtrl: ModalController, public nav: NavController
  ) {
    this.itemColor = ["black"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "black")//if selected color is black 
    {
      this.itemColor = ["black"];
    }
    else if (this.data == "red")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "green")//if selected color is green 
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "blue")//if selected color is blue
    {
      this.itemColor = ["#008577"];
    }
    else if (this.data == "gray")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }
  }
  ngOnInit() {
  }

  async showModal(value) {
    if (value == 'privacyPolicy') {
      let modal = await this.modalCtrl.create({
        component: PrivacyPolicyPage
      });
      return await modal.present();
    }
    else if (value == 'termServices') {
      let modal = await this.modalCtrl.create({
        component: TermServicesPage
      });
      return await modal.present();
    }
    else {
      let modal = await this.modalCtrl.create({
        component: RefundPolicyPage
      });
      return await modal.present();
    }
  }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("bs-search");
  }
  async officiaWebSite() {
    const toast = await this.toastController.create({
      message: 'Official Website Clicked',
      duration: 2000
    });
    toast.present();
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
