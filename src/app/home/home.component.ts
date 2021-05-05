import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          welcome: {cols: 1, rows: 1},
          notes: {cols: 1, rows: 1},
          card4: {cols: 1, rows: 2},
          calendar: {cols: 1, rows: 2},
          forum: {cols: 1, rows: 2},
          blog: {cols: 1, rows: 2},
          food: {cols: 1, rows: 1}
        };
      }
      return {
        columns: 3,
        welcome: {cols: 2, rows: 1},
        notes: {cols: 1, rows: 1},
        card4: {cols: 1, rows: 1},
        calendar: {cols: 1, rows: 2},
        forum: {cols: 1, rows: 1},
        blog: {cols: 1, rows: 1},
        food: {cols: 1, rows: 1}
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
