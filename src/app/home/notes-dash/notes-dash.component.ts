import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Note} from "../../models/note.object";

@Component({
  selector: 'app-notes-dash',
  templateUrl: './notes-dash.component.html',
  styleUrls: ['./notes-dash.component.scss']
})
export class NotesDashComponent implements OnInit {

  username = "Agnieszka";
  userNotes: Array<Note> = [];

  constructor(private snackbar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  saveNote(value: string) {
    if (value != "") {
      let newNote: Note;
      newNote = ({
        content: value,
        date: new Date().toLocaleString(),
      });
      this.userNotes.push(newNote);
      console.log(this.userNotes);
      this.snackbar.open('Note saved successfully', '',{
        duration: 3000
      });
    } else {this.snackbar.open('You cannot save empty note', '',{
      duration: 2000
    })
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
    })
  }

}

@Component({
  selector: 'notes-dash-dialog',
  templateUrl: 'notes-dash-dialog.html'
})
export class NotesDashDialog {

  constructor(
    public dialogRef: MatDialogRef<NotesDashDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}
}
