import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

import { NgForm } from '@angular/forms';

import { AlertService } from '../services/alert.service';
import { EnvService } from '../services/env.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json'
//   })
// };

export class LoginService {

  isLogin;
  
  constructor(private storage: Storage, private alertService: AlertService, private http: HttpClient, private envservice: EnvService) { 
  } 

  authenticate(username: string, password: string) {
      // if(username == "a@gmail.com" && password=="123456")
      // {
      //   console.log("login successfull");
      //   this.storage.set('LOG_INFO', true );
      // }
      // else{
      //   console.log("login failed");
      //   console.log(password + " " + username);
      //   this.storage.set('LOG_INFO', false );
      // }
      const data = {"phone": username, "password" : password};
      
      return this.http.post<any>(this.envservice.API_URL+"/authenticate_app",data,httpOptions);

      //console.log('add', 'nothing');
      
  }

  async isloggedIn()
  {
    const result = await this.storage.get('LOG_INFO');
    return result;
  }
  
}
