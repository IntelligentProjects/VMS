// Project Name: IonicEcommerce
// Project URI: http://ionicecommerce.com
// Author: VectorCoder Team
// Author URI: http://vectorcoder.com/
import { Injectable, ApplicationRef } from '@angular/core';
import { Http } from '@angular/http';
import { ConfigService } from '../config/config.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SharedDataService {

  public banners = [];
  public tab1: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public tab2: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public tab3: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public vendors = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public allCategories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public categories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public subCategories: any = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  public customerData: { [k: string]: any } = {};
  public recentViewedProducts = new Array();
  public wishListProducts = new Array();
  public cartProducts = new Array();
  public couponArray = new Array();
  public cartquantity = "0";
  public wishList = new Array();
  public tempdata: { [k: string]: any } = {};
  public dir = "ltr";
  public selectedFooterPage = "HomePage";
  public cartTempProducts = [];

  billing = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email: '',
    phone: ''
  };
  billingCountryName = "";
  billingStateName = "";
  shipping = {
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: ''
  };
  shippingCountryName = "";
  shippingStateName = "";
  shipping_lines = [];
  listTaxRates = [];
  sameAddress = false;
  checkOutPageText = "Place Your Order";
  public device = '';
  public attributes = [];
  public headerHexColor = "#51688F";


  constructor() {
  }
}
