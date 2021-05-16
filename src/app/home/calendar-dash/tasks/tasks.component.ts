import {Component, Inject, Input, OnInit} from '@angular/core';
import {Task} from '../../../nav/calendar/model/task';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CalendarService} from '../../../nav/calendar/service/calendar-task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() tasks!: Task[];

  constructor( public dialog: MatDialog, private calendarService: CalendarService) {  }

  // openAllTasks(): void {
  //   const dialogRef = this.dialog.open(TasksDialog, {
  //     width: '800px',
  //     data: {
  //       tasks: this.tasks,
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('Dialog was closed');
  //   });
  // }

  deleteTask(task: Task) {
    // return null;
    const index: number = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
    this.calendarService.deleteTask(task.id).subscribe();

  }

  ngOnInit(): void {
  }
}

// @Component({
//   selector: 'tasks-dialog',
//   templateUrl: 'tasks-dialog.html'
// })
//
// export class TasksDialog {
//
//   constructor(@Inject(MAT_DIALOG_DATA) public data: any, private calendarService: CalendarService) {}
//
//   deleteTask(task: Task) {
//     // return null;
//     const index: number = this.data.tasks.indexOf(task);
//     if (index !== -1) {
//       this.data.tasks.splice(index, 1);
//     }
//     this.calendarService.deleteTask(task.id).subscribe();
//
//   }
//
//   // updateTask(task: any) {
//   //
//   // }
// }
