import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../../../components/share/share.module'; 
import { Home4Page } from './home4.page';

const routes: Routes = [
  {
    path: '',
    component: Home4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    ShareModule
  ],
  declarations: [Home4Page]
})
export class Home4PageModule {}
