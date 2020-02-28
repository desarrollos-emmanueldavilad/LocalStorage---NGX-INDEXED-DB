import { Component } from '@angular/core';
import { DBConfig } from 'ngx-indexed-db';
import { SecService } from '../arquitectura/services/secureStorage.service';
import { Platform } from '@ionic/angular';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private secureStorage: SecureStorage,
    public platform: Platform) {
    if(this.platform.is('cordova')||this.platform.is('android')||this.platform.is('ios')){
      this.secureStorage.create('my_store_name')
.then((storage: SecureStorageObject) => {

   storage.get('key')
     .then(
       data => console.log(data),
       error => console.log(error)
   );

   storage.set('key', 'value')
     .then(
      data => console.log(data),
       error => console.log(error)
   );



});
    }
  }

}
