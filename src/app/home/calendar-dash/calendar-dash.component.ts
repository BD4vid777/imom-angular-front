import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../../nav/calendar/service/calendar-task.service';
import {Task} from '../../nav/calendar/model/task';

@Component({
  selector: 'app-calendar-dash',
  templateUrl: './calendar-dash.component.html',
  styleUrls: ['./calendar-dash.component.scss']
})
export class CalendarDashComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.calendarService.getTasks().subscribe(task => this.tasks = task);
  }

}


