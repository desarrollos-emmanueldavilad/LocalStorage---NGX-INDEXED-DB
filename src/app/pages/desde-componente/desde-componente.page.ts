import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuarios, Item } from 'src/app/model/argo.model';
import { StorageService } from 'src/app/arquitectura/services/storage.service';
import { Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-desde-componente',
  templateUrl: './desde-componente.page.html',
  styleUrls: ['./desde-componente.page.scss'],
})
export class DesdeComponentePage implements OnInit {
  items: Usuarios[] = [];
  data: any;
  
  @ViewChild('mylist', {static: true})mylist;
  
  newItem: Usuarios = <Usuarios>{};
  
    constructor(private sService: StorageService,
       private plt:Platform, 
       private toastCOntroller: ToastController) {
      this.plt.ready().then(()=>{
       this.loadItems();
      });
     }
  
    loadItems(){
      
   //   this.sService.getItems().then(items =>{
    this.sService.getAll('desdecomponente').then(items =>{
  
        this.items = items;
      })
    }
  
    ngOnInit() {
    }
  
    add(){
      this.newItem.modified1 = Date.now();
      this.newItem.id = Date.now();
  
      this.sService.addItem('desdecomponente',this.newItem).then(item =>{
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
  
      this.sService.update('desdecomponente', item).then(item=>{
        this.showToast('Item updated!');
        alert('updated');
        this.loadItems();
  
      })
    }
  
    deleteItem(item:Item){
      this.sService.delete('desdecomponente',item.id).then(item=>{
        this.showToast('Item removed!');
        alert('delete') // fix or sliding is stuck afterwards
        this.loadItems();
  
      })
    }
  

   
  
  }
  
