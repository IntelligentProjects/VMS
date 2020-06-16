import { CartService } from './../core/services/cart.service';
import { ProductsinfoService } from './productsinfo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productsinfo',
  templateUrl: './productsinfo.component.html',
  styleUrls: ['./productsinfo.component.scss'],
})
export class ProductsinfoComponent implements OnInit {

  constructor(private activatedRouter :ActivatedRoute, private productsinfoService: ProductsinfoService,public router: Router,public cartService: CartService) { }

   productId=0;
   catId=0;
   catDta: any = [];
   cart: any [] = [];

  ngOnInit() {
    this.activatedRouter.params.subscribe(data =>{
      this.productId=data.prod_id;
      console.log(this.productId);
      this.getliveData(this.productId);
      this.cart = this.cartService.getCart();
    });
  }

  getliveData(productId){
    console.log('getlivedata=','coming here');
    //const data1 = {"cat_id": id};
  //   this.httpClient.get(this.envService.API_URL+"/get_cat/",data1,httpOptions).subscribe(
  //     (data) => {
  //       console.log('status=',data['status']);
  //      // console.log('cat=',JSON.stringify(data['categories']['cat_products']));
  //         //this.dataSource = data;
  //         const jsnObj=data['categories'];


  //         // for(let result of jsnObj){
  //         //   console.log('mmm',result['cat_products']);
  //         //   }


  //     }
  // );

  this.productsinfoService.getProductsDetail(productId).subscribe(
    data => {
      if(data['status']==200)
      {
        console.log('dataa',data['product_data'][0]);
        //this.dataSource = data;
        const jsnObj=data['product_data'];
        this.catDta=data['product_data'][0];

        // for(let result of jsnObj){
        //      this.catDta=result['product_data'];
        //      //this.information = result['cat_products'];
        //    }
      }
    }
  );
  }

  addToCart(product) {
    console.log('productinfo',product);
    this.cart.push(product);
  }
  gotoCart() {
    this.router.navigate(['cart']);
  }

}
