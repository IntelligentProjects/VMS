import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-scratch-card',
  templateUrl: './scratch-card.page.html',
  styleUrls: ['./scratch-card.page.scss'],
})
export class ScratchCardPage implements OnInit {

  constructor(public menuCtrl: MenuController,
    private modalCtrl: ModalController, public nav: NavController) { }
  ngOnInit() {
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }
  openProductsPage() {
    this.nav.navigateForward("bs-products");
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
