import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Note} from "../../models/note.object";
import {Food} from '../../nav/food/model/food';
import {HomeService} from '../service/home.service';
import {formatDate} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notes-dash',
  templateUrl: './notes-dash.component.html',
  styleUrls: ['./notes-dash.component.scss']
})
export class NotesDashComponent implements OnInit {

  username = "Agnieszka";
  @Input() userNotes!: Note[];

  constructor(private snackbar: MatSnackBar, public dialog: MatDialog,
              private homeService: HomeService, private router: Router) { }

  ngOnInit(): void {
  }

  saveNote(value: string) {
    if (value != "") {
      let newNote: Note;
      newNote = ({
        id: '1',
        userId: '1',
        description: value,
        date: formatDate(new Date(), 'yyyy-MM-dd', 'en')
        // date: new Date().toLocaleString(),
      });

      // this.userNotes.push(newNote);
      if (this.userNotes) {
        this.homeService.postNewNote(newNote, '1').subscribe();
      }
      console.log(this.userNotes);
      this.snackbar.open('Note saved successfully', '',{
        duration: 3000
      });
    } else {this.snackbar.open('You cannot save empty note', 'ALERT!',{
      duration: 3000
    });
  }}

  openAllNotes(): void {
    const dialogRef = this.dialog.open(NotesDashDialog, {
      width: '800px',
      data: {
        notes: this.userNotes,
        name: this.username
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed');
    });
  }

}

@Component({
  selector: 'notes-dash-dialog',
  templateUrl: 'notes-dash-dialog.html'
})
export class NotesDashDialog {

  constructor(private homeService: HomeService, private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  deleteNote(note: Note) {
      this.homeService.deleteNote(note.id).subscribe();
    }
}
