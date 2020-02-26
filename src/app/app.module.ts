import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IonicStorageModule} from '@ionic/storage'
import { ArquitecturaModule } from './arquitectura/arquitectura.module';
import { CLIENTE_CONFIGURACION } from './model/configuration';






@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
        AppRoutingModule,
    ArquitecturaModule.forRoot(CLIENTE_CONFIGURACION)
  ],
  providers: [
    StatusBar,
    SplashScreen,
   
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


