import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarioPage } from './calendario.page';
import { SharedModule } from '../shared/shared.module';
import { InfoComponent } from './info/info.component';
import { InviteModalComponent } from './invite-modal/invite-modal.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventDetail } from './models/event';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPage
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'detail',
    component: EventDetailComponent
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
  declarations: [
    CalendarioPage,
    InfoComponent,
    InviteModalComponent,
    EventDetailComponent
  ],
  entryComponents: [InviteModalComponent]
})
export class CalendarioPageModule {}
