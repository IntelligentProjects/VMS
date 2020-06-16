import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categories4',
  templateUrl: './categories4.page.html',
  styleUrls: ['./categories4.page.scss'],
})
export class Categories4Page implements OnInit {
  categories = [
    { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
    { name: "Bottoms", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "3" },
    { name: "Shirts", img: "assets/template-themes/becrux/images/category-images/3.jpg", count: "2" },
    { name: "Winter Wear", img: "assets/template-themes/becrux/images/category-images/4.jpg", count: "2" },
    { name: "Shoes", img: "assets/template-themes/becrux/images/category-images/5.jpg", count: "2" },
    { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
  ];
  constructor(public menuCtrl: MenuController, public nav: NavController) { }
  ngOnInit() {
  }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  goToSearchPage() {
    this.nav.navigateForward("bs-search");
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
