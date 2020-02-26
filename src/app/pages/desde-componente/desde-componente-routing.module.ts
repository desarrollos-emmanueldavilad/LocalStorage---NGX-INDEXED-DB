import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesdeComponentePage } from './desde-componente.page';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const routes: Routes = [
  {
    path: '',
    component: DesdeComponentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),   

  ],
  exports: [RouterModule],
})
export class DesdeComponentePageRoutingModule {}
