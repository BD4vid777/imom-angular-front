import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';
import {PregnancyInfo} from '../../models/pregnancyInfo';

@Component({
  selector: 'app-counters-dash',
  templateUrl: './counters-dash.component.html',
  styleUrls: ['./counters-dash.component.scss'],
})
export class CountersDashComponent implements OnInit {

  @Input() kicksCount?: number;
  constructor() { }

  ngOnInit(): void {
  }

  countChangedHandler(count: number) {
    this.kicksCount = count;
    console.log(count);
  }

}
