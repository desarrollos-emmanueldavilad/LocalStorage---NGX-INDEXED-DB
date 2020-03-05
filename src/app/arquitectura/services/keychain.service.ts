import { Injectable } from '@angular/core';
import {KeychainTouchId} from '@ionic-native/keychain-touch-id/ngx';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeychainService {

  constructor(private keychainTouchId: KeychainTouchId) { }

  available(): Observable<any> {
    return new Observable((observer) => {
      this.keychainTouchId.isAvailable()
          .then((res: any) => console.log(res))
          .catch((error: any) => console.error(error));
    });
  }

  add(key: string, data: string): Observable<any> {
    return new Observable((observer) => {
      this.keychainTouchId.isAvailable().then(
          (info) => {
            this.keychainTouchId.save(key, data, true)
                .then((res: any) => console.log(res))
                .catch((error: any) => console.error(error));
          }
      );

    });

  }

verify(key:string): Promise < any > {
  return new Promise<any>(resolve => {
    this.keychainTouchId.verify(key, 'Todo funcionando')
    .then(res=> resolve(res))
    .catch(err=> console.error("Se ha producido un error en Add: ", err)
    )
  });
  }

has() : Observable < any > {
    return new Observable((observer) => {
      this.keychainTouchId.has('emmanuel')
          .then((res: any) => console.log(res))
          .catch((error: any) => console.error(error));
    });
  }
    remove(key: string) : Observable < any > {
        return new Observable((observer) => {
            this.keychainTouchId.delete(key)
                .then((res: any) => console.log(res))
                .catch((error: any) => console.error(error));
        });
    }
}
