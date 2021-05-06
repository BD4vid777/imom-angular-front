import {Component, Input, OnInit} from '@angular/core';
import {ForumQuestion} from '../model/forumQuestion';

@Component({
  selector: 'app-top-questions',
  templateUrl: './top-questions.component.html',
  styleUrls: ['./top-questions.component.scss']
})
export class TopQuestionsComponent implements OnInit {
  @Input() topQuestions?: ForumQuestion[];

  constructor() { }

  ngOnInit(): void {
  }

}
