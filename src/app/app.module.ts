import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FoodDashComponent } from './home/food-dash/food-dash.component';
import { WelcomeDashComponent } from './home/welcome-dash/welcome-dash.component';
import { CalendarDashComponent } from './home/calendar-dash/calendar-dash.component';
import { ForumDashComponent } from './home/forum-dash/forum-dash.component';
import { BlogDashComponent } from './home/blog-dash/blog-dash.component';
import { NotesDashComponent, NotesDashDialog} from './home/notes-dash/notes-dash.component';
import { CountersDashComponent } from './home/counters-dash/counters-dash.component';
import { FoodComponent } from './nav/food/food.component';
import { CalendarComponent } from './nav/calendar/calendar.component';
import { BlogComponent } from './nav/blog/blog.component';
import { ForumComponent } from './nav/forum/forum.component';
import { ContractionsComponent } from './home/counters-dash/contractions/contractions.component';
import { KicksComponent } from './home/counters-dash/kicks/kicks.component';
import { HeaderComponent } from './nav/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotesComponent } from './home/notes-dash/notes/notes.component';
import { MatDialogModule } from "@angular/material/dialog";
import { SearchQuestionComponent } from './nav/forum/search-question/search-question.component';
import { UserTopicsComponent } from './nav/forum/user-topics/user-topics.component';
import { HttpClientModule } from '@angular/common/http';
import { LastAddedComponent } from './nav/forum/last-added/last-added.component';
import { TopQuestionsComponent } from './nav/forum/top-questions/top-questions.component';
import { ForumQuestionComponent } from './nav/forum/forum-question/forum-question.component';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FoodDashComponent,
    WelcomeDashComponent,
    CalendarDashComponent,
    ForumDashComponent,
    BlogDashComponent,
    NotesDashComponent,
    CountersDashComponent,
    FoodComponent,
    CalendarComponent,
    BlogComponent,
    ContractionsComponent,
    ForumComponent,
    KicksComponent,
    HeaderComponent,
    LoginPageComponent,
    NotesComponent,
    NotesDashDialog,
    SearchQuestionComponent,
    UserTopicsComponent,
    LastAddedComponent,
    TopQuestionsComponent,
    ForumQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    HttpClientModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule { }
// @ts-ignore
