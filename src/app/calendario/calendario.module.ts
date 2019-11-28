import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarioPage } from './calendario.page';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './info/info.component';
import { InviteModalComponent } from './invite-modal/invite-modal.component';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPage
  },
  {
    path: 'info',
    component: InfoComponent
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
  declarations: [CalendarioPage, InfoComponent, InviteModalComponent],
  entryComponents: [InviteModalComponent]
})
export class CalendarioPageModule {}
