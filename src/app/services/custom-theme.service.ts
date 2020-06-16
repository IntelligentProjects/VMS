import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomThemeService {
  public color;
  public bb = true;
  public lb = true;

  data: any;
  data_youtube: any;
  constructor() {
  }

  /* ******************** For Themes ********************** */
  public setTheme(c) {
    this.color = c;
  }
  public getTheme() {
    return this.color;
  }

  /* ******************** For Scripts ********************** */

  // For Wordpress Data
  setData(details) {
    this.data = details;
  }

  getData() {
    return this.data;
  }

  // For Youtube Data
  setYouTubeData(details) {
    this.data_youtube = details;
  }

  getYouTubeData() {
    return this.data_youtube;
  }


}
