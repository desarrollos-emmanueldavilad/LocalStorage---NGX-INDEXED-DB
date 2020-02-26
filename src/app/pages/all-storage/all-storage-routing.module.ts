import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllStoragePage } from './all-storage.page';

const routes: Routes = [
  {
    path: '',
    component: AllStoragePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllStoragePageRoutingModule {}
