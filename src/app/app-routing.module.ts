import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './nav/food/food.component';
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from './nav/calendar/calendar.component';
import { BlogComponent } from './nav/blog/blog.component';
import { ForumComponent } from './nav/forum/forum.component';

const routes: Routes = [
  {path: '**', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'food', component: FoodComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'forum', component: ForumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
