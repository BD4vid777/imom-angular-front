import { Component, OnInit } from '@angular/core';
import { sampleOne, sampleTwo} from './sample-data';
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
    this.events = sampleTwo;
  }

  ngOnInit(): void {
    // this.calendarService.getUserCalendar().subscribe();
    this.calendarService.getUserEvents().subscribe(events => this.events = events);
    console.log(this.events);
    // console.log(this.calendar);
  }
}
