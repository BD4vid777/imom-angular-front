import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import {PregnancyInfo} from '../../../models/pregnancyInfo';
import {HomeService} from '../../service/home.service';
import {ActivatedRoute} from '@angular/router';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
  selector: 'app-kicks',
  templateUrl: './kicks.component.html',
  styleUrls: ['./kicks.component.scss'],
})
export class KicksComponent implements OnInit {

  @Input() kicksCount?: number;
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  constructor(private homeService: HomeService, private route: ActivatedRoute, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  increseKicks() {
    this.homeService.increaseKicksCount('1').subscribe();
    if (this.kicksCount !== undefined) {
      this.countChanged.emit(this.kicksCount += 1);
    }
  }

  decreaseKicks() {
    if (this.kicksCount !== undefined) {
      if (this.kicksCount > 0) {
        this.homeService.decreaseKicksCount('1').subscribe();
        this.countChanged.emit(this.kicksCount -= 1);
      }
    }
  }
}
