import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Contraction} from "../../../models/contraction";
import {HomeService} from "../../service/home.service";

@Component({
  selector: 'app-contractions',
  templateUrl: './contractions.component.html',
  styleUrls: ['./contractions.component.scss']
})
export class ContractionsComponent implements OnInit {

  @Input() countContractions?: number;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  // contractionsCount = 0;
  frequency = 0;
  holdStart = 0;
  holdTime = 0;
  timeStamp = '';
  date: any;

  constructor(private elRef: ElementRef, private homeService: HomeService) { }

  ngOnInit(): void {
  }

  @HostListener('mousedown', ['$event'])
  mouseDown(event: MouseEvent) {
    this.holdStart = Date.now();
    console.log(this.holdStart);
  }

  @HostListener('mouseup', ['$event'])
  mouseUp(event: MouseEvent) {
    if (this.countContractions) {
      this.holdTime = Date.now() - this.holdStart;
      this.frequency = this.holdTime / this.countContractions / 100;
    }
  }

  countContraction() {
    if(this.countContractions) {
      // this.countContractions++;{
      this.countChanged.emit(this.countContractions += 1);
      let date = new Date();
      this.timeStamp = date.toLocaleDateString('en-GB', {weekday: 'long', hour: 'numeric', minute: 'numeric'});
      let contraction: Contraction;
      contraction = {
        duration: this.frequency,
        dateTime: this.timeStamp,
      };
      this.homeService.saveNewContraction('1', contraction).subscribe();
    }
  }
}

