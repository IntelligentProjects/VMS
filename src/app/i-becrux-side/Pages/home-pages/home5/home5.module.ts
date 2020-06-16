import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../../../components/share/share.module'; 
import { Home5Page } from './home5.page';

const routes: Routes = [
  {
    path: '',
    component: Home5Page
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
  declarations: [Home5Page]
})
export class Home5PageModule {}
