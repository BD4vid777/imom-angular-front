import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kicks',
  templateUrl: './kicks.component.html',
  styleUrls: ['./kicks.component.scss']
})
export class KicksComponent implements OnInit {

  kicksCount = 0;
  constructor() { }

  ngOnInit(): void {
  }

  countKicks() {
    this.kicksCount++;
  }
}
