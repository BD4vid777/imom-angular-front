import { Injectable } from '@angular/core';
import {WebRequestService} from '../../../web-request.service';
import {Observable} from 'rxjs';
import { Task } from '../model/task';
import {newTask} from '../model/newTask';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  readonly ROOT_URL;

  constructor(private webRequestService: WebRequestService) {
    this.ROOT_URL = '';
  }

  getTasks(): Observable<Task[]>  {
    return this.webRequestService.get('users/1/tasks-before-birth');
  }

  postNewTask(task: newTask, userId: string): Observable<any> {
    return this.webRequestService.post('/users/' + '?userId=' + userId + '/tasks-before-birth', task);
  }
}
