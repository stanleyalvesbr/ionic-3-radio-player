import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GaleriPage } from './galeri';

@NgModule({
  declarations: [
    GaleriPage,
  ],
  imports: [
    IonicPageModule.forChild(GaleriPage),
  ],
})
export class GaleriPageModule {}
