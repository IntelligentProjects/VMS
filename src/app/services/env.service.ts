import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://www.theplatform-x.com/vms/index.php/public_calls/';
  
  constructor() { }
}