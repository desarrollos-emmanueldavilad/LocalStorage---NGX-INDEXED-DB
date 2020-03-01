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
  items: any[];
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
    //   this.sService.getItems().subscribe(items =>{
    this.sService.getAll("USUARIOS").subscribe(items => {
      this.items = items;
    });
  }

  ngOnInit() {
  }

  add() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.sService.addItem("USUARIOS", this.newItem).subscribe(item => {
      this.sService.driverUsed();
      this.newItem = <Item>{};
      this.showToast("Item  br");
      this.loadItems();
    });
  }

  driverUsed() {
    this.sService.driverUsed().subscribe((data)=>{
      console.log('Drive', data);
    });
  }

  getIndex(name, keypath) {
    this.sService.getIndex("USUARIOS", name, keypath).subscribe(data => {
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

    this.sService.update("USUARIOS", item).subscribe(item => {
      this.showToast("Item updated!");
      alert("updated");
      this.loadItems();
    });
  }

  deleteItem(item: Item) {
    this.sService.delete("USUARIOS", item.id).subscribe(item => {
      this.showToast("Item removed!");
      alert("delete"); // fix or sliding is stuck afterwards
      this.loadItems();
    });
  }

  Count() {
    this.sService.count("USUARIOS").subscribe(count => {
      console.log(count);
    });
  }

  Clear() {
    this.sService.clearDB("USUARIOS").subscribe(cl => {
      console.log(cl);
    });
  }



}
