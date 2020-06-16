import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-advance-options',
  templateUrl: './advance-options.page.html',
  styleUrls: ['./advance-options.page.scss'],
})
export class AdvanceOptionsPage implements OnInit {
  visibleHome = false;//for home expand
  public itemsHome: any = [];//home list
  visibleCategory = false;//for category expand
  public itemsCategory: any = [];//category list
  visibleShop = false;//for shop expand
  public itemsShop: any = [];//shop list
  //home list
  public home = [
    { name: "Home-1" },
    { name: "Home-2" },
    { name: "Home-3" },
    { name: "Home-4" },
    { name: "Home-5" },
    { name: "Home-6" },
    { name: "Home-7" },
    { name: "Home-8" },
    { name: "Home-9" },
    { name: "Home-10" },
  ];
  //category list
  public category = [
    { name: "Category-1" },
    { name: "Category-2" },
    { name: "Category-3" },
    { name: "Category-4" },
    { name: "Category-5" },
    { name: "Category-6" },
  ];
  //shop list
  public shop = [
    { name: "Newest" },
    { name: "On Sale" },
    { name: "Featured" },
  ];
  constructor(public menuCtrl: MenuController, private navCtrl: NavController, private translate: TranslateService) {
    this.itemsHome = [
      { expandedHelp: false },
    ];
    //for category not expand by default
    this.itemsCategory = [
      { expandedHelp: false },
    ];
    //for category not expand by default
    this.itemsShop = [
      { expandedHelp: false },
    ];
  }

  ngOnInit() {
  }
  goToshop(i) {
    if (i == 0) {
      this.navCtrl.navigateForward('bs-products');
    }
    else if (i == 1) {
      this.navCtrl.navigateForward('bs-products');
    }
    else if (i == 2) {
      this.navCtrl.navigateForward('bs-products');
    }
  }
  goToHome(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("bs-home");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("bs-home2");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("bs-home3");
    }
    else if (i == 3) {
      this.navCtrl.navigateForward("bs-home4");
    }
    else if (i == 4) {
      this.navCtrl.navigateForward("bs-home5");
    }
    else if (i == 5) {
      this.navCtrl.navigateForward("bs-home6");
    }
    else if (i == 6) {
      this.navCtrl.navigateForward("bs-home7");
    }
    else if (i == 7) {
      this.navCtrl.navigateForward("bs-home8");
    }
    else if (i == 8) {
      this.navCtrl.navigateForward("bs-home9");
    }
    else if (i == 9) {
      this.navCtrl.navigateForward("bs-home10");
    }
    else if (i == 10) {
      this.navCtrl.navigateForward("bs-home10");
    }
  }
  goToCategory(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("bs-categories");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("bs-categories2");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("bs-categories3");
    }
    else if (i == 3) {
      this.navCtrl.navigateForward("bs-categories4");
    }
    else if (i == 4) {
      this.navCtrl.navigateForward("bs-categories5");
    }
    else if (i == 5) {
      this.navCtrl.navigateForward("bs-categories6");
    }
  }
  //for home expandable
  expandItemHome(item): void {
    this.visibleHome = !this.visibleHome;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsHome.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //for category expandable
  expandItemCategory(item): void {
    this.visibleCategory = !this.visibleCategory;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsCategory.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //for shop expandable
  expandItemShop(item): void {
    this.visibleShop = !this.visibleShop;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsShop.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  goToSearchPage() {
    this.navCtrl.navigateForward("search");
  }
  goToCartPage() {
    this.navCtrl.navigateForward("cart");
  }
  goToColor() {
    this.navCtrl.navigateForward("color-theme");

  }

  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}
