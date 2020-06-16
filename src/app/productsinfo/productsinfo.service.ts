import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from './../services/env.service';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class ProductsinfoService {

  constructor(private http: HttpClient, private envservice: EnvService){ 
  } 

  getProductsDetail(productId:string) {
    
    const data = { "product_id": productId};
    
    return this.http.post<any>(this.envservice.API_URL+"/get_product_by_id/",data,httpOptions);    
}
}
