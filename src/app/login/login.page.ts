import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public selectedIndex = 0;

  public loggedInpages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: '🏠'
    },
    {
      title: 'home',
      url: '/home',
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
  ];


  constructor(private logSrv: LoginService, private storage: Storage, private router: Router,private navcontrl: NavController) { }

  ngOnInit() {
    
  }

  login(form)
  {
  const username = form.value.Phone;
  const password = form.value.password;

  this.logSrv.authenticate(username,password).subscribe(
    data => {

      if(data['status']==200)
      {
        
        this.storage.set('LOG_INFO', true );
        console.log(data['status']);
        console.log('loggedin');

        // const path = window.location.pathname.split('folder/')[1];
        // if (path !== undefined) {
        //   this.selectedIndex = this.loggedInpages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        // }

        this.navcontrl.navigateForward('/dashboard');
        this.navcontrl.pop();

      }
      else{
        this.storage.set('LOG_INFO', false );
        console.log(data['status']);
        console.log('not loggedin');
      }
    }
  )

  }

  async isloggedIn()
  {
    const result = await this.storage.get('LOG_INFO');
    return result;
  }

}
