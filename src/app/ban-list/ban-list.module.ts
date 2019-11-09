import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BanListPage } from './ban-list.page';
import { SharedModule } from '../shared/shared.module';
import { BanUserComponent } from './ban-user/ban-user.component';

const routes: Routes = [
  {
    path: '',
    component: BanListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BanListPage, BanUserComponent]
})
export class BanListPageModule {}
