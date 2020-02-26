import { Injectable } from "@angular/core";
import { NgxIndexedDBService} from "ngx-indexed-db";
import { Platform } from "@ionic/angular";
import { Storage } from "@ionic/storage";

const ITEMS_KEY = "Datos";

@Injectable({
  providedIn: "root"
})
export class StorageService {
  constructor(
    public platform: Platform,
    private dbService: NgxIndexedDBService,
    public storage: Storage
  ) {}

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
