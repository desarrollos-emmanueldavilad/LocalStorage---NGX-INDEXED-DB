import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import {
  SecureStorage,
  SecureStorageObject
} from "@ionic-native/secure-storage/ngx";
import { Observable } from "rxjs";

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

  public addItem(dbName: string, item: any): Observable<any> {
    return new Observable(observer => {
      observer.next(
        this.dbService.add(dbName, item).then(
          data => {
            console.log("Item added");
          },
          error => {
            console.log(error);
          }
        )
      );
    });
  }

  public update(dbName: string, item: any) {
    return new Observable(observer => {
      observer.next(
        this.dbService.update(dbName, item).then(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          }
        )
      );
    });
  }

  public driverUsed(): Observable<any> {
    return new Observable(observer => {
      observer.next(this.storage.driver);
    });
  }

  public getAll(dbName: string): Observable<any> {
    return new Observable(observer => {
      observer.next(this.dbService.getAll(dbName));
    });
  }

  public getIndex(
    dbName: string,
    name: string,
    keypath: string
  ): Observable<any> {
    return new Observable(observer => {
      observer.next(
        this.dbService.getByIndex(dbName, name, keypath).then(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          }
        )
      );
    });
  }

  public delete(dbName: string, id): Observable<any> {
    return new Observable(observer => {
      observer.next(this.dbService.delete(dbName, id));
    });
  }

  public count(dbName: string): Observable<any> {
    return new Observable(observer => {
      observer.next(
        this.dbService.count(dbName).then(
          peopleCount => {
            console.log(peopleCount);
          },
          error => {
            console.log(error);
          }
        )
      );
    });
  }

  public clearDB(dbName: string): Observable<any> {
    return new Observable(observer => {
      observer.next(
        this.dbService.clear(dbName).then(
          () => {
            console.log("Clear!");
          },
          error => {
            console.log(error);
          }
        )
      );
    });
  }

  public deleteHybrid(): Observable<any> {
    return new Observable(observer => {
      observer.next(
        this.dbService.deleteDatabase().then(
          () => {
            console.log("Database deleted successfully");
          },
          error => {
            console.log(error);
          }
        )
      );
    });
  }
}
