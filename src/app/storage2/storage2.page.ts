import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../arquitectura/services/storage.service';
import { Platform, ToastController } from '@ionic/angular';
import { Usuarios, Item } from '../model/argo.model';




@Component({
  selector: 'app-storage2',
  templateUrl: './storage2.page.html',
  styleUrls: ['./storage2.page.scss'],
})




export class Storage2Page implements OnInit {

  


  items: Usuarios[] = [];
  data: any;
  
  @ViewChild('mylist', {static: true})mylist;
  
  newItem: Usuarios = <Usuarios>{};
  
    constructor(private sService: StorageService,
       private plt:Platform, 
       private toastCOntroller: ToastController,
      ) {
      this.plt.ready().then(()=>{
       this.loadItems();

      });
     }


    loadItems(){
      
   //   this.sService.getItems().then(items =>{
    this.sService.getAll('usuarios').then(items =>{
  
        this.items = items;
      })
    }
  
    ngOnInit() {

    }
  
    add(){
      this.newItem.modified1 = Date.now();
      this.newItem.id = Date.now();
  
      this.sService.addItem('usuarios',this.newItem).then(item =>{
        this.sService.driverUsed();
        this.newItem = <Usuarios>{
        }
        this.showToast('Item  br');
        this.loadItems();
      })
    }
  
    driverUsed(){
      this.sService.driverUsed();
    }
  

  
  
  
    async showToast(msg){
      const toast = await this.toastCOntroller.create({
        message: msg,
        duration: 1500
      })
      toast.present();
    }
  
    updateItem(item:Item){
      item.nombre = `Updated: ${item.nombre}`;
      item.modified = Date.now();
  
      this.sService.update('usuarios', item).then(item=>{
        this.showToast('Item updated!');
        alert('updated');
        this.loadItems();
  
      })
    }
  
    deleteItem(item:Item){
      this.sService.delete('usuarios',item.id).then(item=>{
        this.showToast('Item removed!');
        alert('delete') // fix or sliding is stuck afterwards
        this.loadItems();
  
      })
    }
  

   
  
  }
  
