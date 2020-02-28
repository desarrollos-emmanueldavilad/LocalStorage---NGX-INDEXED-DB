import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllStoragePageRoutingModule } from './all-storage-routing.module';

import { AllStoragePage } from './all-storage.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllStoragePageRoutingModule,
  ],
  declarations: [AllStoragePage],
  providers:[]
})
export class AllStoragePageModule {}
