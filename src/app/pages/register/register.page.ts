import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {KeychainService} from '../../arquitectura/services/keychain.service';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
datoGuardado: any;
  addedData: any;
  constructor(private  router: Router,
              private authFinger: KeychainService,
              public platform: Platform) { }

  ngOnInit() {
  }

  register(form) {
    console.log(form.value);
    console.log(form.value.email);
    this.authFinger.add(form.value.name, form.value.data)
          .subscribe((data) => {
            this.addedData = data;
            console.log(this.addedData)
          });
    this.router.navigate(['/login']);
    }


  get(key:string) {
    this.authFinger.verify(key).then((datos) => {
      this.datoGuardado = datos;
      console.log(`información guardada: ${this.datoGuardado}`)
    });
  }

}


