import { Injectable } from '@angular/core';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];
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

   getLogs() {
     return this.logs;
   }
}
