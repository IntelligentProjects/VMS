import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { AppEventsService } from 'src/app/services/app-events.service';


@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.page.html',
  styleUrls: ['./downloads.page.scss'],
})
export class DownloadsPage implements OnInit {

  constructor(public nav: NavController,public appEventsService: AppEventsService, public menuCtrl: MenuController, private loadingController: LoadingController, public shared: SharedDataService,
    public config: ConfigService) { }

  async refreshPage() {
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();
  }
  ngOnInit() {
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
