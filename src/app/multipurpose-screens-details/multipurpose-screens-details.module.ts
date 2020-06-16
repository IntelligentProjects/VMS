import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MultipurposeScreensDetailsPage } from './multipurpose-screens-details.page';
import { ShareModule } from '../multi-purpose-screen-components/components/share/share.module'
const routes: Routes = [
  {
    path: '',
    component: MultipurposeScreensDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MultipurposeScreensDetailsPage]
})
export class MultipurposeScreensDetailsPageModule {}
