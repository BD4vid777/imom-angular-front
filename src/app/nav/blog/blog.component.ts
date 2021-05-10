import { Component, OnInit } from '@angular/core';
import {BlogPost} from '../../models/blog-post.object';
import {BlogService} from './service/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  topic!: BlogPost;
  blogPosts!: BlogPost[];

  categories = ['Mom', 'Dad', 'Child', 'Home'];

  categorySelected = '';

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getTopicOfTheDay().subscribe(topic => this.topic = topic);
    this.blogService.getBlogPosts().subscribe(blogPosts => this.blogPosts = blogPosts);
  }

  selected(chip: string) {
    this.categorySelected = chip;
  }
}
