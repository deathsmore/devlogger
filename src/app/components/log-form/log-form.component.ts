import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: Date;
  constructor(private logService: LogService) { }

  ngOnInit() {
    //subscribe to the selected observable
    this.logService.selectedLog.subscribe(log => {
      if (log.id) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

}
