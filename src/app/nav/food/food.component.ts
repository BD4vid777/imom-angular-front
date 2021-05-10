import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  meals = ['Breakfast', '2nd Breakfast', 'Lunch', 'Dinner', 'Supper'];

  daySelected = 'Monday';
  mealSelected = 'Breakfast';



  constructor() { }

  ngOnInit(): void {
  }

}
