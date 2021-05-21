import { sampleOne } from './sample-data';
import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from "./service/calendar-task.service";
import {UserEvent} from "./model/userEvent";
import {ForumQuestion} from "../forum/model/forumQuestion";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  userEvents: UserEvent[] = [];

  constructor(private calendarService: CalendarService) { }
  title = 'ngx-calendar';

  options1 = {
    outline: false
  };

  options2 = {
    outline: false,
    evenDayDimensions: true
  };

  events = sampleOne;

  addDate() {
    // this.events = sampleOne;
  }

  ngOnInit(): void {
    // this.calendarService.getUserEvents().subscribe(events => events.forEach(userEvent =>  console.log(userEvent.name)));
    this.calendarService.getUserEvents().subscribe(events => this.userEvents = events);
    console.log(this.userEvents.forEach(userEvent => userEvent.name));
  }
}
