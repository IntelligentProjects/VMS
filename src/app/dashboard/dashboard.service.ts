import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
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
export class DashboardService 
{
  constructor(private http: HttpClient, private envservice: EnvService){ 
  } 

getProductsofCat(searchKey: string,catId: number): Observable<any> {
  const data = {"key" : searchKey, "cat_id" : catId};

  // return this.http.get(this.envservice.API_URL+"/search_items_by_keys/",data,httpOptions).pipe(
  //   map(results => results['categories'])
  // );

  return this.http.post<any>(this.envservice.API_URL+"search_items_by_keys/",data,httpOptions).pipe(
    map(results => results),
  );

  // return this.http.post(this.envservice.API_URL+"search_items_by_keys/", data, httpOptions)
  // .subscribe(data => {
  //   console.log('seardata',data);
  //  }, error => {
  //   console.log('errorst',error);
  // });

  

}

// searchProducts(searchword: string,catId: number): Observable<any> {
//   const data = {"cat_id": catId, "title" : searchword};

//   // return this.http.get(this.envservice.API_URL+"/search_items_by_keys/",data,httpOptions).pipe(
//   //   map(results => results['categories'])
//   // );

//   return this.http.post<any>(this.envservice.API_URL+"/search_items_by_keys/",data,httpOptions);
// }

}
