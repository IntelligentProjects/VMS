import { Component, OnInit } from '@angular/core';

import { NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { CustomThemeService } from '../../services/custom-theme.service';
@Component({
  selector: 'app-home4',
  templateUrl: './home4.page.html',
  styleUrls: ['./home4.page.scss'],
})
export class Home4Page implements OnInit {
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  public newestItems: any = [1, 1, 1, 1, 1, 1];
  public saleItems: any = [1, 1, 1, 1, 1, 1];
  public featuredItems: any = [1, 1, 1, 1, 1, 1];
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  public recentViewedProducts: any = [
    { img: "assets/template-themes/becrux/images/item-images/21.jpg", name: "Pearly Sleeve Tshirt", price: "14.64", dPrice: "18.00", fav: false, res: true },
    { img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "12.23", dPrice: "21.00", fav: false, res: true },
    { img: "assets/template-themes/becrux/images/item-images/11.jpg", name: "Flowing Blazer", price: "14.64", dPrice: "30.00", fav: false, res: true },
  ];
  //for categories avatar
  public items = [
    { name: "Tops", img: "assets/template-themes/becrux/images/home-categories/1.jpg", count: "2" },
    { name: "Bottoms", img: "assets/template-themes/becrux/images/home-categories/2.jpg", count: "3" },
    { name: "Shirts", img: "assets/template-themes/becrux/images/home-categories/3.jpg", count: "2" },
    { name: "Winter Wear", img: "assets/template-themes/becrux/images/home-categories/4.jpg", count: "2" },
    { name: "Shoes", img: "assets/template-themes/becrux/images/home-categories/5.jpg", count: "2" },
    { name: "Watches", img: "assets/template-themes/becrux/images/home-categories/6.jpg", count: "2" },
  ];

  constructor(public menuCtrl: MenuController,
    public config: ConfigService
    , private service: CustomThemeService,
    public shared: SharedDataService, public nav: NavController) {

    setTimeout(() => {
      this.newestItems = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "10.14", dPrice: "20.00", fav: true, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "15.25", dPrice: "30.00", fav: false, res: true },
      ];
      this.saleItems = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "10.14", dPrice: "20.00", fav: true, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Printed Tshirt", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/19.jpg", name: "Strip Tshirt", price: "15.25", dPrice: "30.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },
      ];
      this.featuredItems = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/20.jpg", name: "Rose Patel Shirt", price: "10.14", dPrice: "20.00", fav: true, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank T Shirt", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted Gilet Hoodie", price: "15.25", dPrice: "30.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },
      ]
    }, 4000);
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
  ngOnInit() {
  }
  goToSearchPage() {
    this.nav.navigateForward("bs-search");
  }
  goToCartPage() {
    this.nav.navigateForward("bs-cart");
  }
  goToSubCategory() {
    this.nav.navigateForward("bs-products");
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
