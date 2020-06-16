import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-select-zones',
  templateUrl: './select-zones.page.html',
  styleUrls: ['./select-zones.page.scss'],
})
export class SelectZonesPage implements OnInit {

  searchQuery: string = '';
  public items = [];
  public zones = [];

  constructor(public menuCtrl: MenuController,
    public appEventsService: AppEventsService,
    public nav: NavController,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }
  // For Modal Dismiss
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
