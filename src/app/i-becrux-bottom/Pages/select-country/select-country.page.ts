import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { LocationDataService } from '../../providers/location-data/location-data.service';
import { AppEventsService } from 'src/app/services/app-events.service';


@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.page.html',
  styleUrls: ['./select-country.page.scss'],
})
export class SelectCountryPage implements OnInit {

  searchQuery: string = '';
  items;
  countries = new Array;

  constructor(
    public appEventsService: AppEventsService,
    public menuCtrl: MenuController,
    public nav: NavController,
    public config: ConfigService,
    public modalCtrl: ModalController,
    public shared: SharedDataService,
    public location: LocationDataService) {
    setTimeout(() => {
    }, 5000);
    this.items = this.countries = this.location.data.countries;

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
  // For Modal Dismiss
  dismiss() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
  }

}
