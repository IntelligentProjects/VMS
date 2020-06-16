import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericServiceService {
  val = true;
  valOri = "false"
  public setDangerBtnVal(c) {
    this.val = c;
  }
  public getsetDangerBtnValTheme() {
    if (this.val == false) {
      return this.valOri;
    }

  }
  constructor() { }
}
