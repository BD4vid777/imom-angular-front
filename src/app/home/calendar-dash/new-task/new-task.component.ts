import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {newTask} from '../../../nav/calendar/model/newTask';
import {CalendarService} from '../../../nav/calendar/service/calendar-task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  public newTask: any;
  public formSubmitted: boolean;
  taskForm = new FormGroup({
    taskTitle: new FormControl(''),
    taskText: new FormControl(''),

  });

  constructor(private calendarTaskService: CalendarService) {
    this.formSubmitted = false;
  }

  ngOnInit(): void {
  }

  submitted(): void {
    this.formSubmitted = true;
    // tslint:disable-next-line:label-position
    let task: newTask;
    // tslint:disable-next-line:forin
    for (const field in this.taskForm.controls) {
      // tslint:disable-next-line:prefer-const
      task = {
        userId: '1',
        taskTitle: this.taskForm.controls.taskTitle.value,
        taskText: this.taskForm.controls.taskText.value,
        taskStatus: false,
      };
      console.log(task.taskText);
    }

    // @ts-ignore
    this.calendarTaskService.postNewTask(task, '1').subscribe();
  }

}
