import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from "./service/calendar-task.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  // @Input() calendar: any;
  @Input() events: any;

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    // this.calendarService.getUserCalendar().subscribe();
    this.calendarService.getUserEvents().subscribe(events => this.events = events);
    console.log(this.events);
    // console.log(this.calendar);
  }

  refreshTasks() {
  }
}
