import { Component, Input, inject } from '@angular/core';
import { Post } from '../models/post.model';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selection } from '../post.action';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private store = inject(Store);
  @Input() postObj : Post | undefined;
  @Input() currentPost : Post | undefined;
  visibleProperty = 0;
  previousPost: number | undefined;
  constructor() {}
  onSelection(currentPostObj : Post) {
    this.store.dispatch(selection({selectedPost : currentPostObj}));
    if(this.previousPost !== currentPostObj?.id){
      this.visibleProperty = 0;
    }else{
      if(this.visibleProperty < 3){
        this.visibleProperty++;
      }else{
        this.visibleProperty = 0;
      }
    }    
    this.previousPost = currentPostObj?.id;
  }
}

