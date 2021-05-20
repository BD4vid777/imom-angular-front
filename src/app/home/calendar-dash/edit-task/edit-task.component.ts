import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CalendarService} from "../../../nav/calendar/service/calendar-task.service";
import {Router} from "@angular/router";
import {coerceBooleanProperty} from "@angular/cdk/coercion";
import {passBoolean} from "protractor/built/util";
import {Task} from "../../../nav/calendar/model/task";
import {newTask} from "../../../nav/calendar/model/newTask";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  // public editTask: any;
  @Input() editTask?: Task;
  @Output() demo: EventEmitter<Task> = new EventEmitter();
  public formSubmitted: boolean;
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskText: new FormControl(''),
    taskStatus: new FormControl()});

  // editTask!: Task;

  constructor(private calendarTaskService: CalendarService, private router: Router,
   @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data.taskId);
    this.formSubmitted = false;
  }

  ngOnInit(): void {
    this.calendarTaskService.getTask(this.data.taskId).subscribe(editTask => this.editTask = editTask);
    if(this.editTask){
      this.taskForm.controls['taskName'].setValue(this.editTask.taskName);
      this.taskForm.controls['taskText'].setValue(this.editTask.taskText);
      this.taskForm.controls['taskStatus'].setValue(this.editTask.taskStatus);
    }
  }

  submitted(): void {
    this.formSubmitted = true;
    let taskS: boolean;
    // tslint:disable-next-line:label-position
    let task!: Task;
    // tslint:disable-next-line:forin
    for (const field in this.taskForm.controls) {
      // tslint:disable-next-line:prefer-const
      if (this.editTask) {
        if (this.taskForm.controls.taskStatus.value){
          taskS = true;
        } else{
          taskS = false;
        }
        task = {
          id: this.editTask.id,
          taskName: this.taskForm.controls.taskName.value,
          taskText: this.taskForm.controls.taskText.value,
          taskStatus: taskS,
        };
      }
      console.log(task.taskText, task.taskName, task.taskStatus);
      // this.calendarComponent.refreshTasks();
      const navigationDetails: string[] = ['/home'];
      this.router.navigate(navigationDetails);
    }
    this.calendarTaskService.editTask(task).subscribe();
    this.demo.emit(task);
  }
}

