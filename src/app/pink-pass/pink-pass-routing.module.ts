import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinkPassPage } from './pink-pass.page';

const routes: Routes = [
  {
    path: '',
    component: PinkPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PinkPassPageRoutingModule {}
