import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBModule, DBConfig, NgxIndexedDBService, CONFIG_TOKEN } from 'ngx-indexed-db';
import { StorageService } from './services/storage.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { SecureStorage,} from '@ionic-native/secure-storage/ngx';
import { CLIENTE_CONFIGURACION } from '../model/configuration';


export let STORE_CONFIG: DBConfig = CLIENTE_CONFIGURACION;



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule,
  ],
  providers:[StorageService, SecureStorage]
})
export class ArquitecturaModule { 
  static forRoot(configuration: DBConfig): ModuleWithProviders {
    return {
    ngModule:ArquitecturaModule,
    providers: [StorageService,
      NgxIndexedDBService, { provide: CONFIG_TOKEN, useValue: configuration }]
        };
      }
}
