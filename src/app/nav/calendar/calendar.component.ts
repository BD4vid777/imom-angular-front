import { sampleOne } from './sample-data';
import {Component, Input, OnInit} from '@angular/core';
import {CalendarService} from './service/calendar-task.service';
import {EventCalendar} from './model/eventCalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  userEvents: EventCalendar[] = [];
  color = '#3365ed';

  constructor(private calendarService: CalendarService) { }
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
        name: event.data.name,
        description: event.data.description,
        location: event.data.location,
      };
      this.userEvents.push(newEvent);
    }));
  }
}


