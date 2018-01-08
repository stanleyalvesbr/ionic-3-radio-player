import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KontakPage } from './kontak';

@NgModule({
  declarations: [
    KontakPage,
  ],
  imports: [
    IonicPageModule.forChild(KontakPage),
  ],
})
export class KontakPageModule {}
