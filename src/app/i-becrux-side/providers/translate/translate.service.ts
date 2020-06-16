import { Injectable } from '@angular/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Http } from '@angular/http';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(this.http, './assets/i18n/', '.json');
}
@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }
}
