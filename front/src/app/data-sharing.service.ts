import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private objetoCompartilhadoSubject = new BehaviorSubject<any>(null);

  enviarObjeto(objeto: any) {
    this.objetoCompartilhadoSubject.next(objeto);
  }

  receberObjeto() {
    return this.objetoCompartilhadoSubject.asObservable();
  }
}
