import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
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
    { image: "assets/template-themes/becrux/images/starter/home2.png", title: "Home Pages", icon: "home", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/shop2.png", title: "Shop Pages", icon: "cash", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/category2.png", title: "Category Pages", icon: "apps", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." },
    { image: "assets/template-themes/becrux/images/starter/order2.png", title: "Order Page", icon: "browsers", text: "Iorem ipsum dolor sit amet, consectrtur adipiscing elit.Vivamus." }  
  ];
  constructor(public menuCtrl: MenuController, public appEventsService: AppEventsService,
    public navCtrl: NavController, public theme: ThemeService, public splashscreen: SplashScreen) {
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
    this.navCtrl.navigateForward('/bs-home');
  }
  pinchEvent(e) {
    this.navCtrl.navigateForward("ui-templates-details");
  }
}
