import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(
    public platform: Platform,
    private dbService: NgxIndexedDBService,
    public storage: Storage,
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



  public addItem3(dbName: string, item: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService.add(dbName, item)
      .then((res)=>{
        console.log('res==', res)
        resolve(res)
        console.log('res11==',resolve(res))
      } )
      .catch(err=> console.error("Se ha producido un error en Add: ", err)
      )
    });
  }

  public update1(dbName: string, item: any) {
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


  public update(dbName: string, id: any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .update(dbName, id)
        .then((res) => {
          console.log('updated',res)
          resolve(res)
        })
        .catch(err =>
          console.error("Se ha producido un error en Update: ", err)
        );
    });
  }

  public driverUsed(): Observable<any> {
    return new Observable(observer => {
      observer.next(this.storage.driver);
    });
  }

  public getAll(dbName: string): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .getAll(dbName,)
        .then((res) =>{ 
          console.log('respuesta',res)
          resolve(res)})
        .catch(err =>
          console.error("Se ha producido un error en getIndex: ", err)
        );
    });
  }
  public getIndex1(
    dbName: string,
    name: any,
    keypath?: string
  ): Promise<any> {
    return new Promise(resolve => {
      this.dbService.getByKey(dbName, name)
    });
  }


  public getIndex(dbName: string, key: any, value:any): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .getByIndex(dbName, key, value)
        .then((res) =>{ 
          console.log('getINdex',res)
          resolve(res)})
        .catch(err =>
          console.error("Se ha producido un error en getIndex: ", err)
        );
    });
  }

  public getIndexIDDD(dbName: string, key: any): Promise<any> {
    return new Promise<any>((resolve,reject) => {
      this.dbService
        .getByID(dbName, key)
        .then(res => resolve(res))
        .catch()
          Promise.reject(new Error('Se ha producido un error en getIndex'));
      });
  }

  public delete1(dbName: string, id): Observable<any> {
    return new Observable(observer => {
      observer.next(this.dbService.delete(dbName, id));
    });
  }

  public delete(dbName: string, id): Promise<any> {
    return new Promise<any>(resolve => {
      this.dbService
        .delete(dbName, id)
        .then((res) => {
          console.log(res)
          resolve(res)
        })
        .catch(err =>
          console.error("Se ha producido un error en Delete: ", err)
        );
    });
}

  public count1(dbName: string): Observable<any> {
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


  public count(dbName: string): Promise<any> {
    return new Promise<any>(resolve => {
     this.dbService.count(dbName)
     .then((res)=>{
       console.log('conut', res)
       resolve(res)
     })
     .catch(err=> console.error("Se ha producido un error en Count", err))
    });
  }

  public clearDB1(dbName: string): Observable<any> {
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


  public clearDB(dbName: string): Promise<any> {
    return new Promise<any>(resolve => {
        this.dbService.clear(dbName)
        .then((res)=> {
          console.log('res===', res)
          resolve(res)
        })
        .catch(err=> console.error("Se ha producido un error en clear", err))
    });
  }

  public deleteHybrid(): Promise<any> {
    return new Promise<any>(resolve => {
        this.dbService.deleteDatabase()
        .then((res)=> {
          console.log(res)
          resolve(res)
        })
        .catch(err=> console.error('Se ha producido un error en Delete', err));
    });
  }
}
