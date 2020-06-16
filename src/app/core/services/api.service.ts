import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { Router} from '@angular/router';
@Injectable()

export class  ApiService {

  constructor(
    private http: HttpClient,
    public router: Router,
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }


  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${path}`, { params }).pipe(catchError(e => this.formatErrors(e)));
  }
  
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${path}`, body).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${path}`, body).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(`${path}`).pipe(catchError(this.formatErrors));
  }
  
}
