import { Component, OnInit, ViewChild } from "@angular/core";
import { StorageService } from "src/app/arquitectura/services/storage.service";
import { Platform, ToastController } from "@ionic/angular";
import { Item } from "src/app/model/argo.model";
import {
  SecureStorage,
  SecureStorageObject
} from "@ionic-native/secure-storage/ngx";

@Component({
  selector: "app-all-storage",
  templateUrl: "./all-storage.page.html",
  styleUrls: ["./all-storage.page.scss"]
})
export class AllStoragePage implements OnInit {
  items: Item[] = [];
  data: any;

  @ViewChild("mylist", { static: true }) mylist;

  newItem: Item = <Item>{};

  constructor(
    private sService: StorageService,
    private plt: Platform,
    private secure: SecureStorage,
    private toastCOntroller: ToastController
  ) {
    this.plt.ready().then(() => {
      this.loadItems();
    });

    this.secure.create("my_store_name").then((storage: SecureStorageObject) => {
      storage.set("mobile-phone1", "+44444444").then(
        data => console.log(data),
        error => console.log(error)
      );

      console.log(
        storage.get("mobile-phone1")
      );

      // storage.remove('mobile-phone')
      // .then(
      //     data => console.log(data),
      //     error => console.log(error)
      // );
    });
  }

  loadItems() {
    //   this.sService.getItems().then(items =>{
    this.sService.getAll("ARTHAS").then(items => {
      this.items = items;
    });
  }

  ngOnInit() {}

  add() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.sService.addItem("ARTHAS", this.newItem).then(item => {
      this.sService.driverUsed();
      this.newItem = <Item>{};
      this.showToast("Item  br");
      this.loadItems();
      this.secure.create("Sensitive").then((storage: SecureStorageObject) => {
        storage.set("DATOS", `${this.newItem.nombre}`).then(
          data => console.log(data),
          error => console.log(error)
        );
  
        console.log(
          storage.get("Sensitive.data")
        );
      });
    });
  }

  driverUsed() {
    this.sService.driverUsed();
  }

  async showToast(msg) {
    const toast = await this.toastCOntroller.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }

  updateItem(item: Item) {
    item.nombre = `Updated: ${item.nombre}`;
    item.modified = Date.now();

    this.sService.update("ARTHAS", item).then(item => {
      this.showToast("Item updated!");
      alert("updated");
      this.loadItems();
    });
  }

  deleteItem(item: Item) {
    this.sService.delete("ARTHAS", item.id).then(item => {
      this.showToast("Item removed!");
      alert("delete"); // fix or sliding is stuck afterwards
      this.loadItems();
    });
  }

  addSecret() {
    this.secure.create("my_store_name").then((storage: SecureStorageObject) => {
      storage.set("mobile-phone", "+123123123").then(
        data => console.log(data),
        error => console.log(error)
      );

      storage.get("mobile-phone").then(
        data => console.log("nuestro dato", data),
        error => console.log(error)
      );

      storage.get("mobile-phone1").then(
        data => console.log("nuestro dato 1", data),
        error => console.log(error)
      );

      // storage.remove('mobile-phone')
      // .then(
      //     data => console.log(data),
      //     error => console.log(error)
      // );
    });
  }
}
