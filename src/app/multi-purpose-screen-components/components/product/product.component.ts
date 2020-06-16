import { ProductService } from './../../../core/services/product.service';
import { Router } from '@angular/router';
import { CoreModule } from './../../../core/core.module';
import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController, NavController } from '@ionic/angular';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { GenericServiceService } from 'src/app/i-becrux-bottom/Pages/services/generic-service.service';
import {  CartService } from './../../../core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @ViewChild('myProduct', { read: ElementRef, static: false }) myProduct;

  public itemColor = [];
  public iconColorVar = "";
  data: any;
  @Input('data') p;//product data
  @Input('type') type;
  searchTerm = '';

  segments = "Newest"//first segment by default
  cart: any [] = [];
  id: any;
  buttonDisabled: boolean=false;
  catDta: any = [];
  results: Observable<any>;

  //catDta: any = [1,1,1,1,1,1];

  constructor(public translate: TranslateService, public toastController: ToastController, public renderer: Renderer,
    public cartService: CartService,public router: Router,
    public nav: NavController, public gService: GenericServiceService, private service: CustomThemeService, public productService: ProductService) {

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
  
  //icon funtion for wishlist
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
  goToProductDetail() {
    this.nav.navigateForward("bs-product-detail");
  }

  ngOnInit() {
//     var jsonObj = {};
//     for (var i = 0 ; i < this.p.length; i++) {
//     jsonObj["position" + (i)] = this.p[i];
//     this.p=jsonObj;
// }

   //this.p= this.p["cat_products"]
   this.cart = this.cartService.getCart();

   if(this.cart.length > 0)
   {
    console.log('cart',this.cart.length);

    for (const cart of this.cart) {
      console.log('cart-id','cart.id');
      console.log('prod-id',this.p['id']);
  
      if (cart.id === this.p['id']) {
        this.buttonDisabled = true;
      }
    }
   }
  

  // this.buttonDisabled = this.p['is_cart_added'];
  }

  // getData() {
  //   // this.productService.getMocksData().subscribe(resp => {
  //   //   this.catDta = resp;
  //   // })

  //   this.productService.getliveData().subscribe(resp => {
  //     console.log('status',resp['status']);
  //     this.catDta = resp['categories'];
  //   })

  //}

  addToCart(product) {
    console.log('cartitem',product);
    this.cart.push(product);
  }

  // searchChanged()
  // {
  //   this.results = this.productService.searchProducts(this.searchTerm);
  //   this.results.subscribe(data => {
  //     console.log("dataa",data);
  //     this.catDta=data;
  //   });
  //   //console.log('coming',this.results['categories']);
  // }

  searchChanged()
  {
    const jsonobject = this.productService.searchProducts(this.searchTerm);
    this.results =jsonobject['categories'];
    this.catDta=this.results;
    
    // this.results.subscribe(data => {
    //   console.log("dataa",data);
    //   this.catDta=data;
    // });
    //console.log('coming',this.results['categories']);
  }

  

}
