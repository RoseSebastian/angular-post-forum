import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { withLatestFrom, mergeMap, map, of } from "rxjs";
import { loadPosts } from "./post.action";
import { getPosts } from "./post.selector";
import { PostServiceService } from "./post-service.service";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadPostsSuccess, dummyAction } from "./post.action"

@Injectable()
export class PostsEffects {
    private store = inject(Store);
  constructor(
    private actions$: Actions,
    private postsService: PostServiceService,
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      withLatestFrom(this.store.select(getPosts)),
      mergeMap(([action, posts]) => {
        return this.postsService.getposts().pipe(
            map((posts) => {
              return loadPostsSuccess({ posts });
            })
        );
      })
    );
  });
}


