import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllStoragePageRoutingModule } from './all-storage-routing.module';

import { AllStoragePage } from './all-storage.page';
import { StorageService } from 'src/app/arquitectura/services/storage.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllStoragePageRoutingModule,

  ],
  declarations: [AllStoragePage],
  providers:[StorageService,NgxIndexedDBService ]
})
export class AllStoragePageModule {}
