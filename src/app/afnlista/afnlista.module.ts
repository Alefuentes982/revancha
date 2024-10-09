import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfnlistaPageRoutingModule } from './afnlista-routing.module';

import { AfnlistaPage } from './afnlista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfnlistaPageRoutingModule
  ],
  declarations: [AfnlistaPage]
})
export class AfnlistaPageModule {}
