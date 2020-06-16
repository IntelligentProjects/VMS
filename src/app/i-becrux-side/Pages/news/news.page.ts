import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  segments = 'newest';


  featuredPosts = [
    { image: "assets/template-themes/becrux/images/news/1.jpg" },
    { image: "assets/template-themes/becrux/images/news/2.jpg" },

  ]
  public posts = [
    { image: "assets/template-themes/becrux/images/news/2.jpg", title: "Khadi taps for garment e-sales", date: "2019-07-22T 11:03:19", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
    { image: "assets/template-themes/becrux/images/news/7.jpg", title: "Slingshot Softshell Jackets", date: "2019-06-22T 11:12:00", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
    { image: "assets/template-themes/becrux/images/news/6.jpg", title: "Quick n Easy Shopping Festival 2019", date: "2019-05-22T 11:08:18", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties' },
  ];

  public categories = [
    { image: "assets/template-themes/becrux/images/news/4.jpg", name: "App Feature", count: "20" },
    { image: "assets/template-themes/becrux/images/news/6.jpg", name: "Deals", count: "10" },
    { image: "assets/template-themes/becrux/images/news/5.jpg", name: "News", count: "15" },
    { image: "assets/template-themes/becrux/images/news/3.jpg", name: "Promotions", count: "30" },
  ];

  constructor(public menuCtrl: MenuController,
    public nav: NavController, public shared: SharedDataService, public config: ConfigService, translate: TranslateService) { }
  ngOnInit() {
  }
  goToNewsDetail() {
    this.nav.navigateForward('bs-news-detail');
  }
  goToNewsList() {
    this.nav.navigateForward('bs-news-list');
  }
  goToSearchPage() {
    this.nav.navigateForward("bs-search");
  }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  getPosts(event) {
    setTimeout(() => {
      this.posts.push({
        image: "assets/template-themes/becrux/images/news/2.jpg", title: "Khadi taps for garment e-sales", date: "2019-07-22T 11:03:19", content: 'For the eid festive season, everyone is trying to shop best dresses at cheap prices. In this blog, we will tell you about the Best Eid Dresses for Women to a good deals of all varieties'
      },
      );
    }, 500);
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
