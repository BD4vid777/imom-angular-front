import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CalendarService} from "../../../nav/calendar/service/calendar-task.service";
import {Router} from "@angular/router";
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {passBoolean} from "protractor/built/util";
import {Task} from "../../../nav/calendar/model/task";
import {newTask} from "../../../nav/calendar/model/newTask";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  // public editTask: any;
  @Input() editTask?: Task;
  public formSubmitted: boolean;
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskText: new FormControl(''),
    taskStatus: new FormControl('')});

  // editTask!: Task;

  constructor(private calendarTaskService: CalendarService, private router: Router,
   @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data.taskId);
    this.formSubmitted = false;
  }

  ngOnInit(): void {
    this.calendarTaskService.getTask(this.data.taskId).subscribe(editTask => this.editTask = editTask);
    if (this.editTask){
      
    }
    // console.log(this.editTask.editTask.taskName);
    // console.log(this.editTask.taskText);
    // console.log(this.editTask.taskName);

  }

  submitted(): void {
    this.formSubmitted = true;
    // tslint:disable-next-line:label-position
    let task!: Task;
    // tslint:disable-next-line:forin
    for (const field in this.taskForm.controls) {
      // tslint:disable-next-line:prefer-const
      if(this.editTask) {
        task = {
          id: this.editTask.id,
          taskName: this.taskForm.controls.taskName.value,
          taskText: this.taskForm.controls.taskText.value,
          taskStatus: this.taskForm.controls.taskStatus.value,
        };
      }
      console.log(task.taskText, task.taskName, task.taskStatus);
      // this.calendarComponent.refreshTasks();
      const navigationDetails: string[] = ['/home'];
      this.router.navigate(navigationDetails);
    }
    this.calendarTaskService.editTask(task).subscribe();
  }

}

