import { Injectable } from '@angular/core';
import { Log } from '../models/log';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();
  constructor() {
    this.logs = [];
   }

   getLogs(): Observable<Log[]> {
     return of(this.logs);
   }
   setFormLog(log: Log) {
     this.logSource.next(log);
   }
   addLog(log: Log) {
     this.logs.unshift(log);
   }
   updateLog(log: Log) {
     this.logs.forEach((cur, index) => {
      if (cur.id === log.id) {
        this.logs.splice(index, 1);
      }
     });
     this.logs.unshift(log);
   }
   deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
     if (cur.id === log.id) {
       this.logs.splice(index, 1);
     }
    });
  }
  clearState() {
    this.stateSource.next(true);
  }
}
