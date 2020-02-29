import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import {
  SecureStorage,
  SecureStorageObject
} from "@ionic-native/secure-storage/ngx";

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

  secure() {
    this.secureStorage
      .create("my_store_name")
      .then((storage: SecureStorageObject) => {
        storage.get("key").then(
          data => console.log(data),
          error => console.log(error)
        );

        storage.set("key", "value").then(
          data => console.log(data),
          error => console.log(error)
        );

        storage.remove("key").then(
          data => console.log(data),
          error => console.log(error)
        );
      });
  }

  public addItem(dbName: string, item: any): Promise<any> {
    return this.dbService.add(dbName, item);
  }

  public update(dbName: string, item: any): Promise<any> {
    return this.dbService.update(dbName, item);
  }

  public driverUsed() {
    console.log('Driver Used: ' + this.storage.driver);
  }

  public getAll(dbName: string): Promise<any[]> {
    return this.dbService.getAll(dbName);
  }

  public getIndex(dbName: string, name: string, keypath: string): Promise<any> {
    return this.dbService.getByIndex(dbName, name, keypath).then(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  public delete(dbName: string, id): Promise<any> {
    return this.dbService.delete(dbName, id);
  }

  public count(dbName: string): Promise<any> {
    return this.dbService.count(dbName).then(
      peopleCount => {
        console.log(peopleCount);
      },
      error => {
        console.log(error);
      }
    );
  }

  public clearDB(dbName: string): Promise<any> {
    return this.dbService.clear(dbName).then(
      () => {
        console.log("Clear!");
      },
      error => {
        console.log(error);
      }
    );
  }

  public deleteHybrid(): Promise<any> {
    return this.dbService.deleteDatabase().then(
      () => {
        console.log("Database deleted successfully");
      },
      error => {
        console.log(error);
      }
    );
  }
}
