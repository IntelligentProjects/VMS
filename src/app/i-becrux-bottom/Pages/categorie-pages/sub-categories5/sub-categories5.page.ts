import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-sub-categories5',
  templateUrl: './sub-categories5.page.html',
  styleUrls: ['./sub-categories5.page.scss'],
})
export class SubCategories5Page implements OnInit {

  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService,public nav: NavController) { }


  ngOnInit() {
  }
  goToCartPage() {
    this.nav.navigateForward("bb-cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("bb-search");
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
