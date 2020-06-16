import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { EnvService } from '../services/env.service';
import { ProductService, CartService } from '../core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dataSource: any[] = [];
  cart: any [] = [];
  searchTerm = '';
  results: Observable<any>;
  catDta: any = [];
  catId=0;

  constructor(public httpClient: HttpClient,
    private activatedRouter :ActivatedRoute, private router: Router, public navCntrl: NavController, public envService: EnvService,public dashboardService: DashboardService,public cartService: CartService,public productService: ProductService) { }

  ngOnInit() {
    //this.navCntrl.pop();
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
   // this.getData();
   this.cart = this.cartService.getCart();
    this.activatedRouter.params.subscribe(data =>{
      this.catId= data.cat_id
      //console.log('catId',this.catId);
      //this.getliveData();
      this.searchChanged();
    });

  }

  getData(){
    this.httpClient.get('/assets/mocks/product-data.json').subscribe(
      (data: Array<any>) => {
          this.dataSource = data;
          console.log(JSON.stringify(this.dataSource));

      }
  );
  }

  // getliveData(){
  //   console.log('getlivedata=','coming here');
  //   const jsonobject = this.dashboardService.getProductsofCat(this.searchTerm,this.catId);
  //   //this.results =jsonobject;
  //   jsonobject.subscribe(data => {
  //     this.results = data['categories'];
  //   });
  // }

  
  addToCart(product) {
    this.cart.push(product);
  }
  gotoCart() {
    this.router.navigate(['cart']);
  }

  searchChanged()
  {
    this.results=this.dashboardService.getProductsofCat(this.searchTerm,this.catId);
    this.results.subscribe(data => {
      console.log("dataa",data);
      this.dataSource = data;
    });
    //console.log('coming',this.results['categories']);
  }

}
