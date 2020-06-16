import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, MenuController, } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { CustomThemeService } from 'src/app/services/custom-theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';

// For Static Theme Apply
const themes = {
  black: {
    primary: 'black',
    secondary: 'black',
    tertiary: 'white',
    light: 'black',
    dark: 'black',
    medium: 'black',
  }
};

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides, { static: true }) autoSlides: IonSlides;
  indexGlobal: any;
  visiable = false;
  public slides = [
    { image: "assets/template-themes/becrux/images/starter/home.png", title: "Home Pages", icon: "home", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/shop.png", title: "Shop Pages", icon: "cash", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/category.png", title: "Category Pages", icon: "apps", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/order.png", title: "Order Page", icon: "browsers", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." }
  ];
  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController, public appEventsService: AppEventsService, public theme: ThemeService, public splashscreen: SplashScreen, private cTheme: CustomThemeService) {

    this.appEventsService.publish('b_bottom', false);

    // For Becrux Bottom Tabs Hide
    const tabBarBecrux = document.getElementById('myTabBarBecrux');
    tabBarBecrux.style.display = 'none';
    //for theme dark/light disable
    this.appEventsService.publish('darkTheme', 'Light');

  }
  ngOnInit() {
  }
  ionViewWillEnter() {
    // For Local Storage And Color Scheme 
    this.theme.getTheme().then((result) => {
      let val = result;
      if (val == undefined) {
        this.theme.setTheme(themes['black'], 'black');
      }
    });
    // For Menu 1 and Menu 2 Controller
    this.menuCtrl.enable(false, 'Menu1');
    this.menuCtrl.enable(false, 'Menu3');
    this.menuCtrl.enable(true, 'Menu2');

  }

  pinchEvent(e) {
    this.appEventsService.publish('b_bottom', true);
    //this.colorService.setTheme(undefined);
    this.navCtrl.navigateForward("ui-templates-details");  }

  ionViewWillLeave() {
    //for tab bar
    const tabBar = document.getElementById('myTabBarBecrux');
    tabBar.style.display = 'flex';
  }

  ionViewDidEnter() {
    this.splashscreen.hide();
    this.autoSlides.startAutoplay();
  }

  slideChanged() {
    this.autoSlides.getActiveIndex().then(index => {
      if (index == 4) {
        this.visiable = true;
      }
      else {
        this.visiable = false;
      }
    });
  }

  goToHomeEcom() {
    this.navCtrl.navigateForward('/bb-home');
  }
}
