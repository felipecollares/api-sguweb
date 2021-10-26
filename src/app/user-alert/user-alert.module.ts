import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserAlertPageRoutingModule } from './user-alert-routing.module';

import { UserAlertPage } from './user-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAlertPageRoutingModule
  ],
  declarations: [UserAlertPage]
})
export class UserAlertPageModule {}
