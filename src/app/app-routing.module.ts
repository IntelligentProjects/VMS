import { MyVehiclesPage } from './myvehicles/my-vehicles.page';
import { SegmentHeaderTextPageModule } from './my-bookings-tabs/segment-tabs.module';
import { ProductDetailPageModule } from './i-becrux-side/Pages/product-detail/product-detail.module';
import { ProductDetailPage } from './i-becrux-bottom/Pages/product-detail/product-detail.page';
import { HomePage } from './home/home.page';
import { HomeThreePageModule } from './home-three/home-three.module';
import { HomePageModule } from './home/home.module';
import { HomeThreePage } from './home-three/home-three.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'multipurpose-screens-details',
    loadChildren: './multipurpose-screens-details/multipurpose-screens-details.module#MultipurposeScreensDetailsPageModule'
   },
   { 
     path: 'bs-products',
      loadChildren: './i-becrux-side/Pages/products/products.module#ProductsPageModule'
     },
  {
    path: '',
    redirectTo: 'home-three',
    pathMatch: 'full'
  },
  {
    path: 'home-three',
    loadChildren: () => import('./home-three/home-three.module').then( m => m.HomeThreePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  { 
    path: 'dashboard/:cat_id', 
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'productinfo',
    loadChildren: () => import('./productsinfo/productsinfo.module').then( m => m.ProductsInfoModule)
  },
  {
    path: 'productinfo/:prod_id',
    loadChildren: () => import('./productsinfo/productsinfo.module').then( m => m.ProductsInfoModule)
  },
  {
    path: 'bookservice',
    loadChildren: () => import('./bookservices/book-service.module').then( m => m.BookServicesModule)
  },
  {
    path: 'mybookings',
    loadChildren: () => import('./my-bookings-tabs/segment-tabs.module').then( m => m.SegmentHeaderTextPageModule)
  },
  {
    path: 'addvehicles',
    loadChildren: () => import('./addvehicles/add-vehicles.module').then( m => m.AddVehiclesModule)
  },
  {
    path: 'myvehicles',
    loadChildren: () => import('./myvehicles/my-vehicles.module').then( m => m.MyVehiclesModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
