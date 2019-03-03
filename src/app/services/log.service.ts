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
  constructor() {
    this.logs = [{
      id: '1',
      text: 'Generated component',
      date: new Date('02/12/2019 12:54:00')
    },
    {
      id: '2',
      text: 'Added bootstrap',
      date: new Date('02/13/2019 9:33:00')
    },
    {
      id: '3',
      text: 'Added logs component',
      date: new Date('02/14/2019 4:33:00')
    }];
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
}
