import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ModalController, MenuController, NavController } from '@ionic/angular';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {

  language: any;

  currentLanguageCode = localStorage.languageCode;
  languageList = [
    { "name": "English", "code": "en", "image": "assets/template-themes/becrux/images/language_flags/english.jpg", "direction": "ltr" },
    { "name": "Arabic", "code": "ar", "image": "assets/template-themes/becrux/images/language_flags/uae.jpg", "direction": "rtl" }]

  constructor(translate: TranslateService,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public config: ConfigService,
    public shared: SharedDataService,
    public modalCtrl: ModalController
  ) {

    this.languageList.forEach(val => {
      if (val.code == this.currentLanguageCode)
        this.language = val;
    });
  }
  updateLanguage() {


    if (this.currentLanguageCode != this.language.code) {
      localStorage.languageCode = this.language.code;
      localStorage.languageDirection = this.language.direction;
      // this.shared.emptyCart();
      // this.shared.emptyRecentViewed();
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
  }
  dismiss() {
    this.navCtrl.navigateForward("bs-home");
  }
  ngOnInit() {
  }
  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}
