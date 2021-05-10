import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {ForumQuestion} from '../nav/forum/model/forumQuestion';
import {BlogPost} from '../models/blog-post.object';
import {BlogService} from '../nav/blog/service/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  blogPosts: BlogPost[] = [];

  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          welcome: {cols: 1, rows: 1},
          notes: {cols: 1, rows: 1},
          card4: {cols: 1, rows: 2},
          calendar: {cols: 1, rows: 2},
          forum: {cols: 1, rows: 2},
          blog: {cols: 1, rows: 2},
          food: {cols: 1, rows: 1}
        };
      }
      return {
        columns: 3,
        welcome: {cols: 2, rows: 1},
        notes: {cols: 1, rows: 1},
        card4: {cols: 1, rows: 1},
        calendar: {cols: 1, rows: 2},
        forum: {cols: 1, rows: 1},
        blog: {cols: 1, rows: 1},
        food: {cols: 1, rows: 1}
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private blogServce: BlogService) {}

  ngOnInit(): void {
    this.blogServce.getBlogPosts().subscribe(blogPosts => this.blogPosts = blogPosts);
  }
}
