import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { AccessoComponent } from './accesso/accesso.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'accesso',
    component: AccessoComponent
  },
  {
    path: 'registrazione',
    component: RegistrazioneComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage, AccessoComponent, RegistrazioneComponent]
})
export class LoginPageModule {}
