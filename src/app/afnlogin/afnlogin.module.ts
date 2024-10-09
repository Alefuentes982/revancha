import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfnloginPageRoutingModule } from './afnlogin-routing.module';

import { AfnloginPage } from './afnlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfnloginPageRoutingModule
  ],
  declarations: [AfnloginPage]
})
export class AfnloginPageModule {}
