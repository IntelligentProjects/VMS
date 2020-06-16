import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { CustomThemeService } from '../services/custom-theme.service';
import { AppEventsService } from 'src/app/services/app-events.service';

const themes = {
  //black color o.k
  black: {
    primary: 'black',
    secondary: 'black',
    tertiary: 'white',
    light: 'black',
    dark: 'black',
    medium: 'black',
  },
  //red color o.k
  red: {
    primary: '#F44336',
    secondary: '#F44336',
    tertiary: 'white',
    light: '#F44336',
    dark: 'black',
    medium: '#F44336',
  },
  //green color o.k
  green: {
    primary: '#4CAF50',
    secondary: '#4CAF50',
    tertiary: '#4CAF50',
    light: '#4CAF50',
    medium: '#4CAF50',
    dark: 'black'
  },
  //blue color o.k
  blue: {
    primary: '#008577',
    secondary: '#008577',
    tertiary: '#008577',
    light: '#008577',//background
    medium: '#008577',//all btn color
    dark: 'black',//text color
    warning: '#008577',
  },
  //gray color o.k
  gray: {
    primary: '#9E9E9E',
    secondary: '#9E9E9E',
    tertiary: '#9E9E9E',
    light: '#9E9E9E',//background
    medium: '#9E9E9E',//all btn color
    dark: 'black',//text color
    warning: '#9E9E9E',
  },

  //sharp pink color o.k
  sharpPink: {
    primary: '#E91E63',
    secondary: '#E91E63',
    tertiary: '#E91E63',
    light: '#E91E63',//background
    medium: '#E91E63',//all btn color
    dark: 'black',//text color
    warning: '#E91E63',
  },
  //light blue color o.k
  LightBlue: {
    primary: '#00BCD4',
    secondary: '#00BCD4',
    tertiary: '#00BCD4',
    light: '#00BCD4',//background
    medium: '#00BCD4',//all btn color
    dark: 'black',//text color
    warning: '#00BCD4',
  },
  //orange color o.k
  orange: {
    primary: '#FFA500',
    secondary: '#FFA500',
    tertiary: '#FFA500',
    light: '#FFA500',//background
    medium: '#FFA500',//all btn color
    dark: 'black',//text color
    warning: '#FFA500',
  },
  //brown color o.k
  brown: {
    primary: '#735e3e',
    secondary: '#735e3e',
    tertiary: '#735e3e',
    light: '#735e3e',//background
    medium: '#735e3e',//all btn color
    dark: 'black',//text color
    warning: '#735e3e',
  },
  //deep blue color o.k
  deepBlue: {
    primary: '#324b77',
    secondary: '#324b77',
    tertiary: '#324b77',
    light: '#324b77',//background
    medium: '#324b77',//all btn color
    dark: 'black',//text color
    warning: '#324b77',
  }
};

@Component({
  selector: 'app-color-theme',
  templateUrl: './color-theme.page.html',
  styleUrls: ['./color-theme.page.scss'],
})

export class ColorThemePage implements OnInit {
  visiableBtnBlack = true;
  visiableBtnRed = false;
  visiableBtnGreen = false;
  visiableBtnBlue = false;
  visiableBtnGray = false;
  visiableBtnSharpPink = false;
  visiableBtnLightBlue = false;
  visiableBtnOrange = false;
  visiableBtnBrown = false;
  visiableBtnDeepBlue = false;
  public itemColor = "";

  constructor(public modalCtrl: ModalController, public menuCtrl: MenuController, private theme: ThemeService, private elementRef: ElementRef,
    private appEventsService: AppEventsService, private service: CustomThemeService, public nav: NavController) {
    this.visiableBtnBlack = true;
    this.itemColor = "black";
  }
  ngOnInit() {
  }
  /*function to move back to main menu*/
  dismiss() {
    this.nav.navigateForward("bb-home");
  }

  changeTheme(name) {
    this.theme.setTheme(themes[name], name);
    this.service.setTheme(name);
    this.appEventsService.publish('icons', name);
    if (name == 'black') {
      this.itemColor = "black";//black
      this.visiableBtnBlack = true;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'red') {
      this.itemColor = "#F44336";//red   
      this.visiableBtnBlack = false;
      this.visiableBtnRed = true;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'green') {
      this.itemColor = "#4CAF50";//green 
      this.visiableBtnBlack = false;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = true;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'blue') {
      this.itemColor = "#03A9F4";//blue
      this.visiableBtnBlack = false;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = true;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'gray') {
      this.itemColor = "#9E9E9E";//gray
      this.visiableBtnBlack = false;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = true;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'sharpPink') {
      this.itemColor = "#9E9E9E";//gray
      this.visiableBtnBlack = false;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = true;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'LightBlue') {
      this.itemColor = "#9E9E9E";//gray
      this.visiableBtnBlack = false;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = true;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'orange') {
      this.itemColor = "#9E9E9E";//gray
      this.visiableBtnBlack = false;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = true;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'brown') {
      this.itemColor = "#9E9E9E";//gray
      this.visiableBtnBlack = false;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = true;
      this.visiableBtnDeepBlue = false;
    }
    else if (name == 'deepBlue') {
      this.itemColor = "#9E9E9E";//gray
      this.visiableBtnBlack = false;
      this.visiableBtnRed = false;
      this.visiableBtnGreen = false;
      this.visiableBtnBlue = false;
      this.visiableBtnGray = false;
      this.visiableBtnSharpPink = false;
      this.visiableBtnLightBlue = false;
      this.visiableBtnOrange = false;
      this.visiableBtnBrown = false;
      this.visiableBtnDeepBlue = true;
    }
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
