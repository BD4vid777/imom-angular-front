import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-search-question',
  templateUrl: './search-question.component.html',
  styleUrls: ['./search-question.component.scss']
})
export class SearchQuestionComponent implements OnInit {
  color: ThemePalette = 'primary';
  checked = false;
  disabled = true;


  constructor() { }

  ngOnInit(): void {
  }

}
