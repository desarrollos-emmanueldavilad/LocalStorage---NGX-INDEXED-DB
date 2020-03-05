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
    this.sService.getAll("USUARIOS").then((res) =>{ 
      console.log(res)
      this.items = res})
    .catch(err =>
      console.error("Se ha producido un error en getIndex: ", err)
    );
  }

  ngOnInit() {
  }

  add() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.sService.addItem3("USUARIOS", this.newItem).then(item => {
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

  getIndex1() {
    this.sService.getIndexIDDD("USUARIOS", 1).then(
      data => {
        console.log(data);
      }
    )
  }

 

  async showToast(msg) {
    const toast = await this.toastCOntroller.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }


  register(form) {
    console.log(form.value);
    this.sService.addItem3("USUARIOS", form.value).then(item => {
      this.sService.driverUsed();
      this.newItem = <Item>{};
      this.showToast("Item  br");
      this.loadItems();
    });
   // this.router.navigate(['/login']);
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

  DB() {
    this.sService.deleteHybrid()
  }


}
