import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';

const sharedComponents = [FooterComponent];

@NgModule({
  declarations: [sharedComponents],
  imports: [IonicModule, CommonModule]
})
export class SharedModule {}
