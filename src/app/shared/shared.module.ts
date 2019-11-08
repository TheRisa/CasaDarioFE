import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';

const sharedComponents = [FooterComponent, HeaderComponent];

@NgModule({
  declarations: [sharedComponents],
  exports: [sharedComponents],
  imports: [IonicModule, CommonModule]
})
export class SharedModule {}
