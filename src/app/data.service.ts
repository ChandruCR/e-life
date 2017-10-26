import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private usernameSource = new BehaviorSubject<string>("");
  currentUsername = this.usernameSource.asObservable();
  constructor() { }

  changeUsername(username: string) {
    this.usernameSource.next(username);
  }

}
