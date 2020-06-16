import { ProductsinfoComponent } from './productsinfo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsInfoRoutingModule } from './productsinfo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsInfoRoutingModule
  ],
  declarations: [ProductsinfoComponent]
})
export class ProductsInfoModule {}
