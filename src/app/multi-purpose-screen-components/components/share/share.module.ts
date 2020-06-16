import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
//for home banner
import { BannerComponent } from '../banner/banner.component';
//for home banner
// for product
import { ProductComponent } from '../product/product.component';
//for vendor list
import { VendorListComponent } from '../vendor-list/vendor-list.component';
//for sliding tab
import { SlidingTabsComponent } from '../sliding-tabs/sliding-tabs.component';
//for featrued product scrolling
import { ScrollingFeaturedProductsComponent } from '../scrolling-featured-products/scrolling-featured-products.component';
//for categories
import { CategoriesComponent } from '../categories/categories.component';
import { MenuComponentComponent } from '../../../components/menu-component/menu-component.component';

// import { EMenuComponentComponent } from '../e-menu-component/e-menu-component.component';
// import { MenuComponentComponent } from '../../components/menu-component/menu-component.component';
@NgModule({
  declarations: [
    BannerComponent,
    ProductComponent,
    VendorListComponent,
    SlidingTabsComponent,
    ScrollingFeaturedProductsComponent,
    CategoriesComponent,
    MenuComponentComponent
    // EMenuComponentComponent,
    // MenuComponentComponent
  ],
  entryComponents: [],
  exports:[
    BannerComponent,
    ProductComponent,
    VendorListComponent,
    SlidingTabsComponent,
    ScrollingFeaturedProductsComponent,
    CategoriesComponent,
    MenuComponentComponent
    // EMenuComponentComponent,
    // MenuComponentComponent
  ],
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
  ],
})
export class ShareModule { }
