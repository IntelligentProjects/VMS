import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ShareModule } from '../../../components/share/share.module'; 
import { Home10Page } from './home10.page';

const routes: Routes = [
  {
    path: '',
    component: Home10Page
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
  declarations: [Home10Page]
})
export class Home10PageModule {}
