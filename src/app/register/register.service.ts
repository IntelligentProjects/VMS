import { Injectable } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EnvService } from '../services/env.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RegisterService {
  
  constructor(private alertService: AlertService, private http: HttpClient, private envservice: EnvService){ 
  } 

  registeration(fullname: string, phone: string, email: string, password: string) {
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
      const data = {"full_name": fullname, "email" : email, "phone": phone, "password": password};
      
      return this.http.post<any>(this.envservice.API_URL+"/register_in_app",data,httpOptions);

      //console.log('add', 'nothing');
      
  }
}
