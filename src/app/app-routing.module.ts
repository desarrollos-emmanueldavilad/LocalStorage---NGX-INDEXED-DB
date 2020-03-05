import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'all-storage',
    loadChildren: () => import('./pages/all-storage/all-storage.module').then( m => m.AllStoragePageModule)
  },
  {
    path: 'storage2',
    loadChildren: () => import('./storage2/storage2.module').then( m => m.Storage2PageModule)
  },
  {
    path: 'desde-componente',
    loadChildren: () => import('./pages/desde-componente/desde-componente.module').then( m => m.DesdeComponentePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
