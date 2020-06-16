import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  public posts =
    { image: "assets/template-themes/becrux/images/news/2.jpg", title: "Best Eid Dresses for Women", date: "2019-07-22T11:25:55", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to' }

  constructor(public nav:NavController, public menuCtrl: MenuController,
    public shared: SharedDataService, public config: ConfigService, translate: TranslateService) { }
  ngOnInit() {
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
