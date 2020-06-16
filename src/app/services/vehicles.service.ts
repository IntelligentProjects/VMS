import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EnvService } from 'src/app/services/env.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient, private envservice: EnvService) { }

  addVehicles(regNo: string,make: string,model: string,chassisNo: string,year: string, user_id:number): Observable<any> {
    const data = {"reg_no" : regNo, "make" : make, "model" : model, "chassis_no" : chassisNo, "year": year, "user_id": user_id};
  
    return this.http.post<any>(this.envservice.API_URL+"register_vehicle/",data,httpOptions).pipe(
      map(results => results),
    );
  }  

  myvehicles(user_id:number): Observable<any> {
    const data = {"user_id": user_id};
  
    return this.http.post<any>(this.envservice.API_URL+"my_vehicles/",data,httpOptions).pipe(
      map(results => results),
    );
  }  

}
