import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.page.html',
  styleUrls: ['./currency-list.page.scss'],
})
export class CurrencyListPage implements OnInit {
  languageList = [
    { "name": "Pound", "code": "en", "image": "assets/template-themes/becrux/images/language_flags/english.jpg", "direction": "ltr" },
    { "name": "Riyal", "code": "ar", "image": "assets/template-themes/becrux/images/language_flags/uae.jpg", "direction": "rtl" }]

  constructor(public menuCtrl: MenuController,
    public appEventsService: AppEventsService, public nav: NavController, public modalCtrl: ModalController) { }
  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
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
