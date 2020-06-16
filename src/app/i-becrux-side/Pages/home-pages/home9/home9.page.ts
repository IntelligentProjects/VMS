import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController, NavController, MenuController, IonContent } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { CustomThemeService } from '../../services/custom-theme.service';

@Component({
  selector: 'app-home9',
  templateUrl: './home9.page.html',
  styleUrls: ['./home9.page.scss'],
})
export class Home9Page implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  segments = "topSeller"//first segment by default 
  scrollTopButton = false;//for scroll down fab 
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  // For products
  public tab1: any = [1, 1, 1, 1, 1, 1, 1, 1];

  constructor(private service: CustomThemeService, public menuCtrl: MenuController, public toastController: ToastController, public config: ConfigService, public shared: SharedDataService, public nav: NavController) {

    setTimeout(() => {
      this.tab1 = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/25.jpg", name: "Flower Dress", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Black Fancy Ring Box", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "14.64", dPrice: "11.00", fav: false, res: true },];
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
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
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