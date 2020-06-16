import { Component, OnInit, Input, ViewChild, ViewEncapsulation } from '@angular/core';

import { LoadingController, ToastController, ActionSheetController, NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { CustomThemeService } from '../services/custom-theme.service';
// import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  structure: any = { lower: 33, upper: 60 };
  // @ViewChild(Content,{static:false}) content: Content;
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  side = "right";
  @Input('type') type;//product data
  products: any = [1, 1, 1, 1];
  scrollSegments = "all"//scrollable segment
  productView = 'grid';
  sortOrder = 'Newest';
  sortArray = ['Newest', 'A - Z', 'Z - A'];
  constructor(public menuCtrl: MenuController,
    public shared: SharedDataService,
    public config: ConfigService, public toastController: ToastController,
    public actionSheetController: ActionSheetController, public loadingController: LoadingController,
    public nav: NavController, private service: CustomThemeService) {
    setTimeout(() => {
      this.products = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/20.jpg", name: "Rose Patel Shirt", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/25.jpg", name: "Flower Dresst", price: "14.64", dPrice: "31.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.36", dPrice: "25.00", fav: false, res: true },
      ]
    }, 5000);
    this.itemColor = ["black"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "black")//if selected color is black 
    {
      this.itemColor = ["black"];
    }
    else if (this.data == "red")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "green")//if selected color is green 
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "blue")//if selected color is blue
    {
      this.itemColor = ["#008577"];
    }
    else if (this.data == "gray")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }
  }
  //for infinite scroll
  loadData(event) {
    setTimeout(() => {
      this.products.push({ img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "11.00", fav: true, res: true },
        { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "11.00", fav: false, res: true }
      );
      event.target.complete();
    }, 500);
  }
  changeLayout() {
    if (this.productView == 'list') this.productView = "grid";
    else this.productView = "list";
  }
  async onIconClick(i) {

    if (i.fav == false) {
      i.fav = true;
      const toast = await this.toastController.create({
        message: 'Added To Wish List!',
        duration: 2000
      });
      toast.present();

    }
    else {
      i.fav = false;
      const toast = await this.toastController.create({
        message: 'Removed From Wish List!',
        duration: 2000
      });
      toast.present();
    }
  }
  ngOnInit() {
    this.menuCtrl.enable(true, 'Menu2');
  }
  async resetFilters() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Newest',
      cssClass: 'action-sheet',
      buttons: [{
        text: 'A - Z',
        handler: () => {
        }
      }, {
        text: 'Z - A',
        handler: () => {
        }
      }, {
        cssClass: 'as-cancel-color',
        text: 'Cancel',
        role: 'destructive',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
  async refresh() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    return await loading.present();
  }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  openRightMenu() {
    this.menuCtrl.enable(true, 'bbShop');
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true, 'Menu2');
    this.menuCtrl.enable(false, 'bbShop');
  }
  pinchEvent(e) {
    this.nav.navigateForward("ui-templates-details");
  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu2');
    this.menuCtrl.enable(false, 'Menu3');
  }
}