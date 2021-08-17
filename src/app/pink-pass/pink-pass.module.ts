import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinkPassPageRoutingModule } from './pink-pass-routing.module';

import { PinkPassPage } from './pink-pass.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PinkPassPageRoutingModule
  ],
  declarations: [PinkPassPage]
})
export class PinkPassPageModule {}
