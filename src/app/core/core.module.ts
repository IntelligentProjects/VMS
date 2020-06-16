import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApiService,
  ProductService,
  CartService

} from './services';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    ProductService,
    CartService
  ],
  declarations: []
})
export class CoreModule { }
