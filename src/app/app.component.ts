import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Post } from './models/post.model';
import { Store } from '@ngrx/store';
import { getCurrentPosts, getPosts } from './post.selector';
import { loadPosts, selection } from './post.action';
import { PostComponent } from "./post/post.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CommonModule, PostComponent]
})
export class AppComponent implements OnInit{
  private store = inject(Store);
  posts: Observable<Post[] | null> | undefined;
  currentPost: Observable<Post> | undefined;

  constructor() {}

  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    this.store.dispatch(loadPosts());
    this.currentPost = this.store.select(getCurrentPosts);
  }
}
