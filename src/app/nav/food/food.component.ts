import { Component, OnInit } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  allMealtimes = ['Breakfast', '2nd Breakfast', 'Lunch'];
  foods: Food[] = [
    new Food('Hamburger', 'put meat between buns, thats it', 'Lunch'),
    new Food(
      'Spaghetti',
      'Add pasta and sauce with meat. No ketchup, please',
      'Lunch'
    ),
    new Food('Oatmeal', 'Add oat to milk', 'Breakfast'),
    new Food('Toast', 'Add ham and toasted bread from yesterday', 'Breakfast'),
    new Food('Sandwich', 'Join 2 buns and a salad', '2nd Breakfast'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
