import { Component, OnInit, ElementRef } from '@angular/core';


import { ModalController, NavController, LoadingController, MenuController } from '@ionic/angular';
import { SelectCountryPage } from '../../select-country/select-country.page';
import { SelectZonesPage } from '../../select-zones/select-zones.page';
import { SharedDataService } from '../../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../../providers/config/config.service';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.page.html',
  styleUrls: ['./billing-address.page.scss'],
})
export class BillingAddressPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
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
    name:'',
    first_name: '',
    last_name: '',
    company: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    country: '',
    email:'',
    phone:''
  };
  shippingCountryName = "";
  shippingStateName = "";
  constructor(public shared: SharedDataService,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public config: ConfigService,
    public nav: NavController,
    private elementRef: ElementRef,
    private service: CustomThemeService
    ) {
    this.itemColor = ["black"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //for the selection of colors
    if (this.data == "black")//if selected color is black 
    {
        this.itemColor = ["black"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    }
    else if (this.data == "red")//if selected color is red 
    {
        this.itemColor = ["#F44336"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    }
    else if (this.data == "green")//if selected color is green 
    {
        this.itemColor = ["#4CAF50"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    }
    else if (this.data == "blue")//if selected color is blue
    {
        this.itemColor = ["#008577"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    }
    else if (this.data == "gray")//if selected color is gray
    {
        this.itemColor = ["#9E9E9E"];
        this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    }
  }
  ngOnInit() {
  }

  async selectCountryPage(value) {
    let modal = await this.modalCtrl.create({
      component: SelectCountryPage
    });
    return await modal.present();
  }

  async selectZonePage(value) {
    let modal = await this.modalCtrl.create({
      component: SelectZonesPage
    });
    return await modal.present();
  }
  goToShippingAddress() {
    this.nav.navigateForward("bs-shipping-address");
  }
  goToShippingMethod(){
    this.nav.navigateForward("bs-shipping-method");

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
