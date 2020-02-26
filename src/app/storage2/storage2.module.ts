import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Storage2PageRoutingModule } from './storage2-routing.module';

import { Storage2Page } from './storage2.page';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Storage2PageRoutingModule,

  ],
  declarations: [Storage2Page]
})
export class Storage2PageModule {}
