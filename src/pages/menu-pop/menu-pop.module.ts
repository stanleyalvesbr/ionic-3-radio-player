import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuPopPage } from './menu-pop';

@NgModule({
  declarations: [
    MenuPopPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuPopPage),
  ],
})
export class MenuPopPageModule {}
