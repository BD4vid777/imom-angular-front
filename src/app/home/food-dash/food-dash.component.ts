import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-dash',
  templateUrl: './food-dash.component.html',
  styleUrls: ['./food-dash.component.scss']
})
export class FoodDashComponent implements OnInit {

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  meals = ['Breakfast', '2nd Breakfast', 'Lunch', 'Dinner', 'Supper'];

  daySelected = '';
  mealSelected = '';

  foodList = [
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Breakfast", day: ['Monday', "Friday", 'Saturday']},
    {name: "Oat Meal", description: "Mix with milk", meal: "Breakfast", day: ['Monday', "Tuesday', 'Wednesday", 'Sunday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "2nd Breakfast", day: ['Monday', "Friday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "2nd Breakfast", day: ['Monday', "Thursday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Lunch", day: ['Monday', "Friday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Lunch", day: ['Monday', "Friday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Dinner", day: ['Monday', "Friday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Dinner", day: ['Monday', "Friday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Dinner", day: ['Monday', "Friday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Supper", day: ['Monday', "Friday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Supper", day: ['Monday', "Friday", 'Saturday']},
    {name: "Scrumbled Eggs", description: "Scrumble and pan", meal: "Supper", day: ['Monday', "Friday", 'Saturday']},
    ]


  constructor() { }

  ngOnInit(): void {
  }

  selectDay(day: string) {
    this.daySelected = day;
    console.log(this.daySelected);
  }

  selectMeal(meal: string) {
    this.mealSelected = meal;
    console.log(this.mealSelected);
  }
}
