import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './nav/food/food.component';
import { HomeComponent } from "./home/home.component";
import { CalendarComponent } from './nav/calendar/calendar.component';
import { BlogComponent } from './nav/blog/blog.component';
import { ForumComponent } from './nav/forum/forum.component';
import {ForumQuestionComponent} from './nav/forum/forum-question/forum-question.component';
import {NewQuestionComponent} from './nav/forum/new-question/new-question.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'food', component: FoodComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'forum', component: ForumComponent},
  {path: 'forum-question/:id', component: ForumQuestionComponent},
  {path: 'new-question', component: NewQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
