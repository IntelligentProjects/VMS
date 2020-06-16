import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController, IonCardContent, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { CustomThemeService } from '../../services/custom-theme.service';

@Component({
  selector: 'app-home7',
  templateUrl: './home7.page.html',
  styleUrls: ['./home7.page.scss'],
})
export class Home7Page implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  scrollTopButton = false;//for scroll down fab 
  segments = "topSeller"//first segment by default
  count=0;
  public itemColor = [];
  public iconColorVar = "";
  data: any; 
  //for product slider after banner
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }
  public tab1: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public newestItems: any = [1, 1, 1, 1, 1, 1, 1, 1];


  constructor( private service: CustomThemeService, public menuCtrl: MenuController, public config: ConfigService, public shared: SharedDataService, public nav: NavController) {
    setTimeout(() => {
      this.tab1 = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Skirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Red And Black Studio Chair", price: "15.36", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Printed T-shirt", price: "15.36", dPrice: "11.00", fav: false, res: true }
      ];
      this.newestItems = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/25.jpg", name: "Flower Dress", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/20.jpg", name: "Ross Petal Shirt", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Printed Tshirt", price: "14.14", dPrice: "15.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/19.jpg", name: "Strip Tshirt", price: "10.14", dPrice: "20.00", fav: true , res: true},
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim jacket", price: "15.25", dPrice: "30.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/13.jpg", name: "Brown Long Coat", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/26.jpg", name: "Straight Long Coat", price: "20.00", dPrice: "21.00", fav: false, res: true },
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
  //for infinite scroll
  loadData(event) {
    setTimeout(() => {
      if (this.count == 0) {
        this.newestItems.push({
          img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.count++;
      }
      else if (this.count == 1) {
        this.newestItems.push({
          img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.count++;
      }
      else if (this.count == 2) {
        this.newestItems.push({
          img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "11.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "12.23", dPrice: "11.00", fav: false, res: true }
        );
        this.count = 0;
      }
      event.target.complete();
    }, 500);
  }
  // For FAB Scroll
  onScroll(e) {
    if (e.detail.scrollTop >= 500) {
      this.scrollTopButton = true;
    }
    if (e.detail.scrollTop < 500) {
      this.scrollTopButton = false;
    }
  }
  // For Scroll To Top Content
  scrollToTop() {
    this.content.scrollToTop(700);
    this.scrollTopButton = false;
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
