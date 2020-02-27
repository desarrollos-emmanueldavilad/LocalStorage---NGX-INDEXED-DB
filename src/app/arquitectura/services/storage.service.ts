import { Injectable } from "@angular/core";
import { NgxIndexedDBService} from "ngx-indexed-db";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(
    public platform: Platform,
    private dbService: NgxIndexedDBService,
    public storage: Storage,
    private secureStorage: SecureStorage
  ) {}

  secure(){
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

     storage.remove('key')
     .then(
         data => console.log(data),
         error => console.log(error)
     );

  });
  }

  addItem(DBNAME: string, item: any) {
    return this.dbService.add(DBNAME, item);
  }

  update(DBNAME: string, item: any) {
    return this.dbService.update(DBNAME, item);
  }

  driverUsed() {
    console.log("Driver Used: " + this.storage.driver);
  }

  getAll(DBNAME: string): Promise<any[]> {
    return this.dbService.getAll(DBNAME);
  }

  delete(DBNAME: string, id) {
    return this.dbService.delete(DBNAME, id);
  }
}
