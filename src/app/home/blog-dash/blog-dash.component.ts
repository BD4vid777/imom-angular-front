import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.object';

@Component({
  selector: 'app-blog-dash',
  templateUrl: './blog-dash.component.html',
  styleUrls: ['./blog-dash.component.scss']
})
export class BlogDashComponent implements OnInit {

  categories = ['Mom', 'Dad', 'Child', 'Home'];

  categorySelected = '';

  blogDate = new Date(Date.now()).toLocaleDateString('en-GB');

  blogPosts: Array<BlogPost> = [
    {id: 1, title: "Artykuł Mamy", text: "Lorem ipsum dolor sit", category: "Mom", dateCreated: this.blogDate},
    {id: 2, title: "Artykuł taty", text: "I jakiś tekst znowu", category: "Dad", dateCreated: this.blogDate},
    {id: 3, title: "Artykuł dziecka", text: "Co by tu zbroić", category: "Child", dateCreated: this.blogDate},
    {id: 4, title: "Artykuł dziecka drugi", text: "Co by tu zbroić", category: "Child", dateCreated: this.blogDate},
    {id: 5, title: "Artykuł dziecka trzeci", text: "Co by tu zbroić", category: "Child", dateCreated: this.blogDate},
    {id: 6, title: "Artykuł taty kolejny", text: "I jakiś tekst znowu", category: "Dad", dateCreated: this.blogDate},
    {id: 7, title: "Artykuł o domu jeden", text: "I jakiś tekst znowu", category: "Home", dateCreated: this.blogDate},
    {id: 8, title: "Artykuł mamy najważniejszy", text: "Wiadomo, że mama jest najlepsza", category: "Mom", dateCreated: this.blogDate},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selected(chip: string) {
    this.categorySelected = chip;
  }
}
