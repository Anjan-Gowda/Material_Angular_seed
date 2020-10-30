import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  private _name = new Subject<any>();
  currentName = this._name.asObservable();


  listentoName(): Observable<any> {
    return this._name.asObservable();
  }

  updateName(name: string) {
    this._name.next(name);
  }



  private _title = new BehaviorSubject('');
  currentTitle = this._title.asObservable();

  updateTitle(name) {
    this._title.next(name);
  }


  private _userData = new BehaviorSubject('');
  current_userData = this._userData.asObservable();

  update_userData(item) {
    this._userData.next(item);
  }


  private _clientData = new BehaviorSubject('');
  current_clientData = this._clientData.asObservable();

  update_clientData(item) {
    this._clientData.next(item);
  }


}