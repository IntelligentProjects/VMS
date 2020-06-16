import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from 'src/app/services/env.service';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ProductService {

  constructor(private apiService: ApiService, private http: HttpClient, private envService: EnvService) { }
  
  // createSession(){
  //   return this.apiService.post(environment.api_url + '/auth/createSession')
  //     .pipe(map(data => { return data }));
  // }
  // fetchUseridByToken(userToken: string) {
  //   return this.apiService.post(environment.api_url + '/auth/fetchUserId',userToken)
  //     .pipe(map(data => { return data }));
  // }
  // getMocksData(){
  //   return this.http.get('/assets/mocks/cat-data.json').pipe(map(data => { return data }));
  // }

  getliveData(){
    return this.http.get(this.envService.API_URL+"/get_cat").pipe(map(data => { return data }));
  }

  // searchData(title: string): Observable<any> {
  //   return this.http.get(`${this.envService.API_URL+"/search_items_by_keys"}?s=${encodeURI(title)}`).pipe(
  //     map(results => results['categories'])
  //   );
  // }

  // searchProducts(title: string,catId: string): Observable<any> {
  //   return this.http.get(`${this.envService.API_URL+"/search_items_by_keys"}?s=${encodeURI(title)}`).pipe(
  //     map(results => results['categories'])
  //   );
  // }

  searchProducts(searchword: string) {
    const data = {"key" : searchword};
  
    // return this.http.get(this.envservice.API_URL+"/search_items_by_keys/",data,httpOptions).pipe(
    //   map(results => results['categories'])
    // );
  
    // return this.http.post<any>(this.envService.API_URL+"search_items_by_keys/",data,httpOptions).pipe(
    //   map(results => results),
    // );

    return this.http.post(this.envService.API_URL+"search_items_by_keys/", data, httpOptions)
    .subscribe(data => {
      console.log('seardata',data);
     }, error => {
      console.log(error);
    });


  }
  
}



