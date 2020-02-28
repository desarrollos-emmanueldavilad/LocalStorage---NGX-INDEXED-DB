import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';
import { error } from 'util';

@Injectable({
  providedIn: "root"
})
export class SecService {
  constructor(
    public platform: Platform,
    public secureStorage: SecureStorage
  ) {
    
  }
cr(){
return  this.secureStorage.create('my_store_name')
}
  
addSecret() {
return  this.secureStorage.create('my_store_name')
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

     storage.remove('key')
     .then(
         data => console.log(data),
         error => console.log(error)
     );

  });
  }

  getkeys () {
  return  this.secureStorage.create('SECRETO').then((storage: SecureStorageObject) => {
        storage.keys().then(
          data => console.log("nuestro dato", data),
          error => console.log(error)
        );
  
      });
}


}















