import { Component, OnInit } from '@angular/core';

import { NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { CustomThemeService } from '../../services/custom-theme.service';
@Component({
  selector: 'app-home8',
  templateUrl: './home8.page.html',
  styleUrls: ['./home8.page.scss'],
})
export class Home8Page implements OnInit {
  // For Tab1
  public newestItems: any = [1, 1, 1, 1, 1, 1];
  public onSaleItems: any = [1, 1, 1, 1, 1, 1];
  public featuredItems: any = [1, 1, 1, 1, 1, 1, 1, 1];
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  //For Products Slider Per View
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  constructor( private service: CustomThemeService,public menuCtrl: MenuController, public config: ConfigService, public shared: SharedDataService, public nav: NavController) {

    setTimeout(() => {
      this.newestItems = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/25.jpg", name: "Flower Dress", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "10.14", dPrice: "20.00", fav: true , res: true},
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "15.25", dPrice: "30.00", fav: false, res: true },
      ];
      this.onSaleItems = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Salor Pent", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Printed Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/14.jpg", name: "Strip Thirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "10.14", dPrice: "20.00", fav: true , res: true},
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "15.25", dPrice: "30.00", fav: false, res: true }
      ];
      this.featuredItems = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/20.jpg", name: "Rose Petal Shirt", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/21.jpg", name: "Perly Sleeve Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted Gilet Hoodie", price: "10.14", dPrice: "20.00", fav: true , res: true},
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/13.jpg", name: "Brown Long Coat", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/26.jpg", name: "Straight Long Coat", price: "15.25", dPrice: "30.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/16.jpg", name: "Printed Sweatshirt", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/27.jpg", name: "Flowing Blazer White", price: "15.25", dPrice: "30.00", fav: false, res: true }
      ];
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
