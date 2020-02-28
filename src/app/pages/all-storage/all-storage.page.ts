import { Component, OnInit, ViewChild } from "@angular/core";
import { StorageService } from "src/app/arquitectura/services/storage.service";
import { Platform, ToastController } from "@ionic/angular";
import { Item } from "src/app/model/argo.model";


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
    private toastCOntroller: ToastController,

  ) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  loadItems() {
    //   this.sService.getItems().then(items =>{
    this.sService.getAll("USUARIOS").then(items => {
      this.items = items;
    });
  }

  ngOnInit() {
  }

  add() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.sService.addItem("USUARIOS", this.newItem).then(item => {
      this.sService.driverUsed();
      this.newItem = <Item>{};
      this.showToast("Item  br");
      this.loadItems();
    });
  }

  driverUsed() {
    this.sService.driverUsed();
  }

  getIndex(name, keypath) {
    this.sService.getIndex("USUARIOS", name, keypath).then(data => {
      console.log(data);
    });
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

    this.sService.update("USUARIOS", item).then(item => {
      this.showToast("Item updated!");
      alert("updated");
      this.loadItems();
    });
  }

  deleteItem(item: Item) {
    this.sService.delete("USUARIOS", item.id).then(item => {
      this.showToast("Item removed!");
      alert("delete"); // fix or sliding is stuck afterwards
      this.loadItems();
    });
  }

  Count() {
    this.sService.count("USUARIOS").then(count => {
      console.log(count);
    });
  }

  Clear() {
    this.sService.clearDB("USUARIOS").then(cl => {
      console.log(cl);
    });
  }



}
