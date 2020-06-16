import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  heart = false;
  qtyy = 0;
  slides = [
    { img: "assets/template-themes/becrux/images/item-images/26.jpg" },
    { img: "assets/template-themes/becrux/images/item-images/1.jpg" },
    { img: "assets/template-themes/becrux/images/item-images/2.jpg" },
    { img: "assets/template-themes/becrux/images/item-images/3.jpg" },
  ]
  public tab1: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  product = [{
    name: "hannan", src: "assets/template-themes/becrux/images/item-images/3.jpg", stock_quantity: "10",
    categories: { name: "hannan" }
  }];
  variationPrice = "135.00$";
  ratingStars = [
    { value: '1', fill: 'star-outline' },
    { value: '2', fill: 'star-outline' },
    { value: '3', fill: 'star-outline' },
    { value: '4', fill: 'star-outline' },
    { value: '5', fill: 'star-outline' }
  ];
  sliderConfig = {
    slidesPerView: 2.5,
    spaceBetween: 0
  }

  constructor(private service: CustomThemeService, public menuCtrl: MenuController,
    public nav: NavController, public toastController: ToastController) {
    setTimeout(() => {
      this.tab1 = [
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "19.00", fav: false, res: true },
        { badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "14.64", dPrice: "21.00", fav: false, res: true },
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
  openReviewsPage() {
    this.nav.navigateForward("add-review");
  }
  ngOnInit() {
  }
  clickWishList() {
    this.heart = !this.heart;

  }
  goToProductPage() {
    this.nav.navigateForward("bs-products");
  }

  async share() {
    const toast = await this.toastController.create({
      message: 'Share is Clicked',
      duration: 2000
    });
    toast.present();
  }
  goToCart() {
    this.nav.navigateForward("bs-cart");
  }

  addQuantity() {
    this.qtyy++;
  }
  minusQuantity() {
    if (this.qtyy > 0) {
      this.qtyy--;
    }
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
