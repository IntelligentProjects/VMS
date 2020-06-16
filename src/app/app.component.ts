import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  public selectedIndex = 0;
  // const isloggedIn:boolean = false;
   isloggedIn; 

   public dummyArray = [
   ];

  public appPages = [
    {
      title: 'home-three',
      url: '/home-three',
      icon: '🏠'
    },

    {
      title: 'Login',
      url: '/login',
      icon: '👤'
    },
    {
      title: 'Signup',
      url: '/register',
      icon: '👤'
    },
    {
      title: 'home',
      url: '/home',
      icon: '🏠'
    },
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: '🏠'
    },
    {
      title: 'Book Service',
      url: '/bookservice',
      icon: '🏠'
    },
    {
      title: 'My Bookings',
      url: '/mybookings',
      icon: '🏠'
    },
    {
      title: 'My Orders',
      url: '/bookservice',
      icon: '🏠'
    },
    {
      title: 'Add Vehicles',
      url: '/addvehicles',
      icon: '🏠'
    },
    {
      title: 'My Vehicles',
      url: '/myvehicles',
      icon: '🏠'
    }
  ];

  public loggedInpages = [
    {
      title: 'home-three',
      url: '/home-three',
      icon: '🏠'
    },
    {
      title: 'home-three',
      url: '/home-three',
      icon: '🏠'
    },
    {
      title: 'my services',
      url: '/home',
      icon: '🏠'
    },
    {
      title: 'my bookings',
      url: '/home',
      icon: '🏠'
    },
    {
      title: 'logout',
      url: '/home',
      icon: '🏠'
    },
    {
      title: 'dashboard',
      url: '/dashboard',
      icon: '🏠'
    },
    {
      title: 'My orders',
      url: '/dashboard',
      icon: '🏠'
    },
    {
      title: 'Book Service',
      url: '/dashboard',
      icon: '🏠'
    },
    {
      title: 'Services History',
      url: '/dashboard',
      icon: '🏠'
    },
    {
      title: 'Book Service',
      url: '/bookservice',
      icon: '🏠'
    }
  ];

  public labels = ['Dashboard', 'Order History', 'Booking History', 'Profile', 'Logout'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private loginservice: LoginService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];

    this.isloggedIn = this.loginservice.isloggedIn().then(result => {
      if (result) {
        console.log('loggedin-t'+" "+ result);

        this.dummyArray = [...this.loggedInpages];
  
        this.selectedIndex = this.loggedInpages.findIndex(page => page.title === path);

        // const path = window.location.pathname.split('folder/')[1];
        // if (path !== undefined) {
        //   this.selectedIndex = this.loggedInpages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        // }
      }
      else{
        this.dummyArray = [...this.appPages];
        this.selectedIndex = this.appPages.findIndex(page => page.title === path);
        console.log('loggedin-f'+" "+ result);
      }
    });
  }
}
