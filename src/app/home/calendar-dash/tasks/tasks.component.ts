import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../nav/calendar/model/task';
import {MatDialog} from '@angular/material/dialog';
import {CalendarService} from '../../../nav/calendar/service/calendar-task.service';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() tasks!: Task[];

  constructor( public dialog: MatDialog, private calendarService: CalendarService) {  }


  deleteTask(task: Task) {
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.calendarService.deleteTask(task.id).subscribe();

  }

  ngOnInit(): void {
  }

  addTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      width: '400px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
    };
}
