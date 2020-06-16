import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categories5',
  templateUrl: './categories5.page.html',
  styleUrls: ['./categories5.page.scss'],
})
export class Categories5Page implements OnInit {
  public items = [
    {
      name: "Women Clothing", img: "assets/template-themes/becrux/images/category-images/7.jpg",
      products: [
        { name: "Tops", img: "assets/template-themes/becrux/images/category-images/1.jpg", count: "2" },
        { name: "Bottom", img: "assets/template-themes/becrux/images/category-images/2.jpg", count: "9" },
      ]
    },
    {
      name: "Watch Accessories", img: "assets/template-themes/becrux/images/category-images/8.jpg",
      products: [
        { name: "Watches", img: "assets/template-themes/becrux/images/category-images/6.jpg", count: "2" },
      ]
    },
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
