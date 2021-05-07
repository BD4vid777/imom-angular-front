import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contractions',
  templateUrl: './contractions.component.html',
  styleUrls: ['./contractions.component.scss']
})
export class ContractionsComponent implements OnInit {

  contractionsCount = 0;
  frequency = 0;
  holdStart = 0;
  holdTime = 0;
  timeStamp = '';
  date: any;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event: MouseEvent) {
    this.holdStart = Date.now();
    console.log(this.holdStart);
  }

  @HostListener('mouseup', ['$event'])
  mouseUp(event: MouseEvent) {
    this.holdTime = Date.now() - this.holdStart;
    this.frequency = this.holdTime / this.contractionsCount / 100;
  }

  countContraction() {
    this.contractionsCount++;
    let date = new Date();
    this.timeStamp = date.toLocaleDateString('en-GB', {weekday: 'long', hour: 'numeric', minute: 'numeric'})
  };
}

