import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, MenuController } from '@ionic/angular';
import { SharedDataService } from '../../providers/shared-data/shared-data.service';
import { ConfigService } from '../../providers/config/config.service';
import { CustomThemeService } from '../services/custom-theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  orders=[{ number:"1902", date_created:"Jul 30, 2019", total:"USD 229.00", status:"Processing"}]
  constructor(private service: CustomThemeService,public menuCtrl: MenuController,public appEventsService: AppEventsService,
    private loadingController: LoadingController, public shared: SharedDataService,
    public config: ConfigService, public nav: NavController) {
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

  async refreshPage() {
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();
  }
  ngOnInit() {
  }
  openProductsPage() {
    this.nav.navigateForward("bb-products");
  }
  goToCartPage(){
    this.nav.navigateForward("bb-cart");
  }
  pinchEvent(e) {
    this.appEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.nav.navigateForward("ui-templates-details");  }
  ionViewWillEnter() {
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');
  }
}
