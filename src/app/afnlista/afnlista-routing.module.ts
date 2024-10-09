import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfnlistaPage } from './afnlista.page';

const routes: Routes = [
  {
    path: '',
    component: AfnlistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfnlistaPageRoutingModule {}
