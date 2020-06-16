import { Component, OnInit, Input } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sliding-tabs',
  templateUrl: './sliding-tabs.component.html',
  styleUrls: ['./sliding-tabs.component.scss'],
})
export class SlidingTabsComponent implements OnInit {
  @Input('type') type;//product data
  products: any = [1, 1, 1, 1, 1, 1, 1, 1];
  productsImage: any = [1, 1, 1, 1, 1, 1, 1, 1];
  scrollSegments = "all"//scrollable segment
  scrollSegmentsImage = "allImage"//scrollable segment for image
  visiable = false;
  count = 0;
  constructor(public loadingController: LoadingController) {
    setTimeout(() => {
      if (this.type == "notImage") {
        this.visiable = true;
      }
      else if (this.type == "image") {
        this.visiable = false;
      }
    }, 4000);
    setTimeout(() => {
      this.products = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "14.64", dPrice: "31.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Printed T Shirt", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/9.jpg", name: "Red Frock", price: "15.36", dPrice: "25.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/10.jpg", name: "Mid Weist Pent", price: "12.23", dPrice: "18.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/11.jpg", name: "Flowing Blazer", price: "14.64", dPrice: "18.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted gilet Hoodie", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/13.jpg", name: "Brown Long Coat", price: "15.36", dPrice: "25.00", fav: false, res: true }
      ];
      this.productsImage = [
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/8.jpg", name: "Casual Cotton T Shirt", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Ladies Jacket ", price: "14.64", dPrice: "25.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/14.jpg", name: "Polo T-Shirt", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/15.jpg", name: "Ladies Jeans Pent", price: "15.36", dPrice: "25.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/16.jpg", name: "Printed Sweatshirt", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/18.jpg", name: "Ladies Jackets", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Polo T-Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/17.jpg", name: "Casual Cotton T Shirt", price: "15.36", dPrice: "21.00", fav: false, res: true }
      ];
    }, 4000);
  }
  //for infinite scroll
  loadData(event) {
    setTimeout(() => {
      if (this.count == 0) {
        this.products.push({
          img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.productsImage.push({
          img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.count++;
      }
      else if (this.count == 1) {
        this.products.push({
          img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.productsImage.push({
          img: "assets/template-themes/becrux/images/item-images/3.jpg", name: "Cotton Shirt", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/4.jpg", name: "Denim Sailer Pant", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.count++;
      }
      else if (this.count == 2) {
        this.products.push({
          img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "11.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "12.23", dPrice: "11.00", fav: false, res: true }
        );
        this.productsImage.push({
          img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "11.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "12.23", dPrice: "11.00", fav: false, res: true }
        );
        this.count = 0;
      }
      event.target.complete();
    }, 500);
  }
  ngOnInit() { }
  async  enableLoadingController(i) {
    // if (i == 0) {
    //   this.visiable = true;
    // }
    // else if (i == 1) {
    //   this.visiable = false;
    // }
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      spinner: 'crescent',
      duration: 2000
    });
    return await loading.present();
  }
}