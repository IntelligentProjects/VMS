
// Project Name: Ionic woocommerce
// Project URI: http://themes-coder.com/products/ionic-woocommerce/
// Author: themes-coder Team
// Author URI: http://themes-coder.com/

import { Injectable, ApplicationRef } from "@angular/core";


if (localStorage.languageCode == undefined) {

  localStorage.languageCode = "en"; //default language code
  localStorage.languageDirection = "ltr"; //default language direction of app
  localStorage.currency = "&#36;";  //default currecny html code to show in app.
  // Please visit this link to get your html code  https://html-css-js.com/html/character-codes/currency/
  localStorage.currencyCode = "USD";  //default currency code
  localStorage.currencyPos = "left";  //default currency position
  localStorage.decimals = 2;  //default currecny decimal
}

@Injectable()

export class ConfigService {
  public url: string = 'http://tcshop.ionicecommerce.com';
  public consumerKey: string = 'ck_ee23f4235c5a9c1eb04b96b85048a2a312dc3225';
  public consumerSecret: string = 'cs_502ced0196a050298c91d4d9febee1004274564b';


  public showIntroPage = 1;// show/hide intro page value 1 for show, 0 for hide
  public appInProduction = false;
  //public productSlidesPerPage = 2.5;
  productSlidesConfig = {
    slidesPerView:2.2,
    spaceBetween: 0
    }

  public onesignalAppId = "10728890-4bb1-4e91-89c3-000f14a3b093";
  public onesignalSenderId = "866752245266";

  public googleMapId = "AIzaSyBCMLN-ZbmFDw7Rf_OLsCDrYzI4n-jcaX0";

  public admob = 0; // show/hide ads on android value 1 for show, 0 for hide
  public admobBannerid = '';
  public admobIntid = '';
  public admobIos = 0; // show/hide ads on ios value 1 for show, 0 for hide
  public admobBanneridIos = '';
  public admobIntidIos = '';

  public languageCode = localStorage.languageCode;//default language of app
  public languageDirection = localStorage.languageDirection;//default direction of app
  public appDirection: any = this.languageDirection;// application direction
  public currency = localStorage.currency;
  public productsArguments = "lang=" + localStorage.languageCode + "&currency=" + localStorage.currencyCode;//additional product arguments for query

  public urlExt: string = this.url + "/wp-json/woo_app_connect/mobile/";
  public langId: string = "1";
  public loader = 'dots';
  public newProductDuration = 20;
  public cartButton = 1;//1 = show and 0 = hide

  public currencyPos = localStorage.currencyPos;
  public address;
  public fbId;
  public email;
  public latitude;
  public longitude;
  public phoneNo;
  public notifText;
  public notifTitle;
  public notifDuration;
  public footerShowHide;
  public homePage = 1;
  public categoryPage = 1;
  public siteUrl = '';
  public appName = '';
  public packgeName = 1;
  public introPage = 1;
  public myOrdersPage = 1;
  public newsPage = 1;
  public wishListPage = 1;
  public shippingAddressPage = 1;
  public aboutUsPage = 1;
  public contactUsPage = 1;
  public editProfilePage = 1;
  public settingPage = 1;

  public rateApp = 1;
  public shareApp = 1;
  public fbButton = 1;
  public googleButton = 1;
  public notificationType = "";
  public privacyPolicy = "Theme-coder is simply one stop shop for programatic Web and App developers. Our team is striving to bring instant solution for both developers and enterpreneurs and assisting them in exploring new horizons of growth and opportunities. ";
  public termServices = "Theme-coder is simply one stop shop for programatic Web and App developers. Our team is striving to bring instant solution for both developers and enterpreneurs and assisting them in exploring new horizons of growth and opportunities.";
  public aboutUs = "Theme-coder is simply one stop shop for programatic Web and App developers. Our team is striving to bring instant solution for both developers and enterpreneurs and assisting them in exploring new horizons of growth and opportunities. ";
  public refundPolicy = "it usually includes fthe following pieces of information";
  public filterMaxPrice = 1000;
  public guestCheckOut = true;
  public checkOutPage = 1;
  public defaultIcons = false;
  public orderCancelButton = false;
  public addressPage = true;
  public downloadPage = true;
  public cancelOrderTime: number;
  public showVendorInfo = false;//for dokan plugin
  public showWcVendorInfo = false;
  public multiLanguage = false;
  public multiCurrency = false;
  public appSettings: { [k: string]: any } = {};
  public enableGeoFencing: boolean = false;
  public enableDeliveryTracking: boolean = false;
  public enableWpPointReward: boolean = false;
  public trackingUrl = "";
  public currentSettings = 1;

  constructor() {
  }


}