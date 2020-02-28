import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DesdeComponentePageRoutingModule } from './desde-componente-routing.module';

import { DesdeComponentePage } from './desde-componente.page';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';
import { ArquitecturaModule } from 'src/app/arquitectura/arquitectura.module';
export const dbArgoProbando: DBConfig = {
  name: '@ARGO',
  version:1,
  objectStoresMeta: [
    {
      store: 'desdecomponente',
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "nombre", keypath: "nombre", options: { unique: false } },
        { name: "apellido", keypath: "apellido", options: { unique: false } },
        { name: "telefono", keypath: "telefono", options: { unique: false } },
        { name: "modified", keypath: "modified", options: { unique: false } }
      ]
    }
  ]
};
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArquitecturaModule.forRoot(dbArgoProbando),
    DesdeComponentePageRoutingModule,
  ],
  declarations: [DesdeComponentePage]
})
export class DesdeComponentePageModule {}
