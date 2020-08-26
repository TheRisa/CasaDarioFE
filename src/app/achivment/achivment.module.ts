import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AchivmentPage } from './achivment.page';
import { SharedModule } from '../shared/shared.module';
import { AchivmentListComponent } from './achivment-list/achivment-list.component';

const routes: Routes = [
  {
    path: '',
    component: AchivmentPage
  },
  {
    path: 'list',
    component: AchivmentListComponent
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
  declarations: [AchivmentPage, AchivmentListComponent]
})
export class AchivmentPageModule {}
