import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';
import { NavController, LoadingController, MenuController, IonContent } from '@ionic/angular';
import { GenericServiceService } from 'src/app/i-becrux-bottom/Pages/services/generic-service.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
  count = 5;
  gridVisiable = true;
  data: any;
  public products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  constructor(public menuCtrl: MenuController, public renderer: Renderer,
    public nav: NavController, public loadingController: LoadingController, public gService: GenericServiceService) {
    setTimeout(() => {
      this.products = [
        { p_id: '0', badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "12.23", dPrice: "20.00", fav: false, res: true },
        { p_id: '1', badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.64", dPrice: "18.00", fav: false, res: true },
        { p_id: '2', badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.14", dPrice: "15.00", fav: false, res: true },
        { p_id: '3', badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "19.00", fav: false, res: true },
        { p_id: '4', badge: true, sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { p_id: '5', badge: true, sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "14.64", dPrice: "21.00", fav: false, res: true },
      ]
    }, 4000);
    //  this.gService.getTsetDangerBtnValheme().subs
    // this.count--;
    // if (this.count == 0) {
    //   this.gridVisiable = "false";
    // }
  }
  openProductsPage() {
    this.nav.navigateForward("products");
  }
  ngOnInit() {
  }
  async refreshPage() {
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
  goToSearchPage() {
    this.nav.navigateForward("bs-search");
  }
  gridVisiableFun(i) {

  }
  removeProduct(id) {
    this.products.forEach((value, index) => {
      if (value.p_id == id) {
        this.products.splice(index, 1);
      }
    });

    if (this.products.length == 0) {
      this.gridVisiable = false;
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
