import { Injectable } from '@angular/core';
import {WebRequestService} from '../../../web-request.service';
import {ForumQuestion} from '../model/forumQuestion';
import {Observable} from 'rxjs';
import {newQuestion} from "../model/newQuestion";
import {catchError} from "rxjs/operators";
import {newAnswer} from '../model/newAnswer';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  readonly ROOT_URL;

  constructor(private webRequestService: WebRequestService) {
    this.ROOT_URL = 'forum-questions';
  }

  getForumQuestions(): Observable<ForumQuestion[]>  {
    return this.webRequestService.get('forum-questions');
  }

  getForumQuestionById(questionId: string): Observable<ForumQuestion> {
    console.log('ddd');
    return this.webRequestService.get(this.ROOT_URL + '/' + questionId);
  }

  getYourTopics(): Observable<ForumQuestion[]>  {
    return this.webRequestService.get('users/1/forum-questions');
  }

  getLastAddedQuestions(): Observable<ForumQuestion[]>  {
    return this.webRequestService.get('forum-questions/last-added');
  }

  postNewQuestion(question: newQuestion, userId: string): Observable<any> {
    return this.webRequestService.post('forum-questions/add_question' + '?userId=' + userId, question);
  }

  postNewAnswer(answer: newAnswer, userId: string, questionId: string): Observable<any> {
    return this.webRequestService.post('forum-answers/' + questionId + '?userId=' + userId, answer);
  }

  likeOrDislikeQuestion(value: boolean, questionId: number, userId: string) {
    return this.webRequestService.post('question/question-likes/add-like/' + questionId + '/' + userId + '?value=' + value, '');
  }

  likeOrDislikeAnswer(value: boolean, answerId: number, userId: string) {
   return this.webRequestService.post('answer/answer-likes/add-like/' + answerId + '/' + userId + '?value=' + value, '');
  }

  checkQuestionLike(userId: string, questionId: any) {
    return this.webRequestService.get('question/question-likes/' + questionId + '/' + userId);
  }
}
