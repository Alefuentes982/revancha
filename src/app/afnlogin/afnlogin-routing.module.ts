import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfnloginPage } from './afnlogin.page';

const routes: Routes = [
  {
    path: '',
    component: AfnloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfnloginPageRoutingModule {}
