import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../providers/config/config.service';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';


@Component({
  selector: 'app-scrolling-featured-products',
  templateUrl: './scrolling-featured-products.component.html',
  styleUrls: ['./scrolling-featured-products.component.scss'],
})
export class ScrollingFeaturedProductsComponent implements OnInit {
  @Input('type') type;//product data
  count = 0;
  visiable = false;//for which home it display
  // For products
  public products: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public featured: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  constructor(public config: ConfigService, public shared: SharedDataService, ) {
    setTimeout(() => {
      if (this.type == "homeSix") {
        console.log("not image");
        this.visiable = true;
      }
      else  if (this.type == "homeNine") {
        console.log("image");
        this.visiable = false;
      }
      this.products = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/22.jpg", name: "Denim Jacket Reverse", price: "12.23", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted gilet Hoodie", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/16.jpg", name: "Printed Sweatshirt", price: "14.64", dPrice: "20.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/21.jpg", name: "Pearly Sleeve Tshirt", price: "15.36", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: false, img: "assets/template-themes/becrux/images/item-images/23.jpg", name: "Culottes Pent", price: "12.23", dPrice: "31.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Tshirt", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/24.jpg", name: "Cotton Printed Tshirt", price: "14.64", dPrice: "21.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "15.36", dPrice: "21.00", fav: false, res: true }
      ];
      this.featured = [
        { sale: true, featured: true, img: "assets/template-themes/becrux/images/item-images/20.jpg", name: "Rose Petal Shirt", price: "12.23", dPrice: "11.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/7.jpg", name: "Double Tank Shirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/21.jpg", name: "Perly Sleeve Tshirt", price: "14.64", dPrice: "11.00", fav: false, res: true },
        { sale: true, featured: false, img: "assets/template-themes/becrux/images/item-images/12.jpg", name: "Quilted Gilet Hoodie", price: "10.14", dPrice: "20.00", fav: true , res: true},
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/13.jpg", name: "Brown Long Coat", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/26.jpg", name: "Straight Long Coat", price: "15.25", dPrice: "30.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/16.jpg", name: "Printed Sweatshirt", price: "18.13", dPrice: "21.00", fav: false, res: true },
        { sale: false, featured: true, img: "assets/template-themes/becrux/images/item-images/27.jpg", name: "Flowing Blazer White", price: "15.25", dPrice: "30.00", fav: false, res: true }
      ];
    }, 10000);
  }

  ngOnInit() { }

   //for infinite scroll
   loadData(event) {
    setTimeout(() => {
      console.log(event);
      if (this.count == 0) {
        this.products.push({
          img: "assets/template-themes/becrux/images/item-images/1.jpg", name: "Printed Cotton Tshirt", price: "14.64", dPrice: "25.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/2.jpg", name: "Shoulder Top", price: "12.23", dPrice: "21.00", fav: false, res: true }
        );
        this.featured.push({
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
        this.featured.push({
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
        this.featured.push({
          img: "assets/template-themes/becrux/images/item-images/5.jpg", name: "Denim Jacket", price: "14.64", dPrice: "11.00", fav: false, res: true
        },
          { img: "assets/template-themes/becrux/images/item-images/6.jpg", name: "Crochet Hollow Hat", price: "12.23", dPrice: "11.00", fav: false, res: true }
        );
        this.count = 0;
      }
      event.target.complete();
    }, 500);
  }
}
