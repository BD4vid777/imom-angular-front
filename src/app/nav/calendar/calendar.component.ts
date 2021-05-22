import { sampleOne } from './sample-data';
import {Component, Inject, Input, OnInit} from '@angular/core';
import {CalendarService} from './service/calendar-task.service';
import {EventCalendar} from './model/eventCalendar';
import {HomeService} from "../../home/service/home.service";
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {NewTaskComponent} from "../../home/calendar-dash/new-task/new-task.component";
import {NewEventComponent} from "./new-event/new-event.component";


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  userEvents: EventCalendar[] = [];
  color = '#3365ed';

  constructor(private calendarService: CalendarService, public dialog: MatDialog,) { }
  title = 'ngx-calendar';

  options1 = {
    outline: false
  };

  options2 = {
    outline: false,
    evenDayDimensions: true
  };



  addDate() {
    // this.calendarService.addNewEvent().subscribe();
  }

  ngOnInit(): void {
    this.calendarService.getUserEvents().subscribe(events => events.forEach(event => {
      let newEvent!: EventCalendar;
      newEvent = {
        startDateTime: new Date(event.startDateTime),
        endDateTime: new Date(event.endDateTime),
        name: event.name,
        description: event.description,
        location: event.location,
      };
      this.userEvents.push(newEvent);
    }));
  }

  addEvent() {const dialogRef = this.dialog.open(NewEventComponent, {
    width: '400px'});
              dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}


