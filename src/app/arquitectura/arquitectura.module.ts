import { NgModule, InjectionToken, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';
import { StorageService } from './services/storage.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CLIENTE_CONFIGURACION } from '../model/configuration';


export let STORE_CONFIG: DBConfig = CLIENTE_CONFIGURACION;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule.forRoot(STORE_CONFIG),
  ],
  providers:[StorageService]
})
export class ArquitecturaModule { 
  static forRoot(configuration: DBConfig): ModuleWithProviders {
    return {
    ngModule:ArquitecturaModule,
    providers: [StorageService]
        };
      }
}
