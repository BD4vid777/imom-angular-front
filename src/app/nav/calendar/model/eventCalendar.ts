import {CalendarEvent} from 'ngx-simple-calendar/lib/data-models/data-calendar';

export interface EventCalendar extends CalendarEvent{
  startDateTime: Date;
  endDateTime: Date;
  name: string;
  description: string;
  location: string;
}
