import { Component, OnInit } from '@angular/core';
import {ForumQuestion} from '../model/forumQuestion';
import {ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ForumQuestionComponent} from '../forum-question/forum-question.component';
import {newQuestion} from '../model/newQuestion';
import {ForumService} from '../service/forum.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.scss']
})
export class NewQuestionComponent implements OnInit {
  // public newQuestion: ForumQuestion;
  public newQuestion: any;
  public formSubmitted: boolean;
  questionForm = new FormGroup({
    questionTitle: new FormControl(''),
    question: new FormControl(''),

  });

  constructor(private forumService: ForumService) {
    this.formSubmitted = false;
}

ngOnInit(): void {
  }

submitted(): void {
  this.formSubmitted = true;
  // tslint:disable-next-line:label-position
  // tslint:disable-next-line:forin
  let question: newQuestion;
  for (const field in this.questionForm.controls) {
    // tslint:disable-next-line:prefer-const
    question = {
      userId: '1',
      questionTitle: this.questionForm.controls['questionTitle'].value,
      question: this.questionForm.controls['question'].value,
    };
    console.log(question.question, question.questionTitle);
  }

  // @ts-ignore
  this.forumService.postNewQuestion(question, '1').subscribe();
}
}
