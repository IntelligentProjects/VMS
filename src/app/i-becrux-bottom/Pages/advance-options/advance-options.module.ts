import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdvanceOptionsPage } from './advance-options.page';
import { TranslateModule } from '@ngx-translate/core';
//for side menu expandable
import { MenuComponentComponent } from '../../components/menu-component/menu-component.component';

const routes: Routes = [
  {
    path: '',
    component: AdvanceOptionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdvanceOptionsPage, MenuComponentComponent]
})
export class AdvanceOptionsPageModule {}
