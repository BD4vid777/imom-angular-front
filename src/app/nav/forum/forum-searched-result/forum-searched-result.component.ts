import {Component, Input, OnInit} from '@angular/core';
import {ForumQuestion} from "../model/forumQuestion";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forum-searched-result',
  templateUrl: './forum-searched-result.component.html',
  styleUrls: ['./forum-searched-result.component.scss']
})
export class ForumSearchedResultComponent implements OnInit {
  @Input() searchedQuestions: ForumQuestion[] = [];
  constructor( private route: ActivatedRoute,
               private router: Router) {
    console.log( this.router.getCurrentNavigation()?.extras.state);

  }

  ngOnInit(): void {
    // console.log( this.route.snapshot.paramMap.get('searched'));

  }

}
