import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAlertPage } from './user-alert.page';

const routes: Routes = [
  {
    path: '',
    component: UserAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAlertPageRoutingModule {}
