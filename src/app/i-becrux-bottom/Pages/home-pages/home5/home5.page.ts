import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-home5',
  templateUrl: './home5.page.html',
  styleUrls: ['./home5.page.scss'],
})
export class Home5Page implements OnInit {
  //for categories
  public items = [
    { name: "Tops", img: "assets/template-themes/becrux/images/home-categories/1.jpg", count: "2" },
    { name: "Bottoms", img: "assets/template-themes/becrux/images/home-categories/2.jpg", count: "3" },
    { name: "Shirts", img: "assets/template-themes/becrux/images/home-categories/3.jpg", count: "2" },
    { name: "Winter Wear", img: "assets/template-themes/becrux/images/home-categories/4.jpg", count: "2" },
    { name: "Shoes", img: "assets/template-themes/becrux/images/home-categories/5.jpg", count: "2" },
    { name: "Watches", img: "assets/template-themes/becrux/images/home-categories/6.jpg", count: "2" },
  ];
  constructor(public menuCtrl: MenuController,public appEventsService: AppEventsService, public nav: NavController) { }
  ngOnInit() {
  }
  goToSearchPage() {
    this.nav.navigateForward("bb-search");
  }
  goToCartPage() {
    this.nav.navigateForward("bb-cart");
  }
  goToSubCategory() {
    this.nav.navigateForward("bb-products");
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
