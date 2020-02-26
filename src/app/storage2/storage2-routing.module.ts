import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Storage2Page } from './storage2.page';

const routes: Routes = [
  {
    path: '',
    component: Storage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Storage2PageRoutingModule {}
