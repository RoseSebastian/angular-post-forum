import { createAction, props } from '@ngrx/store';
import { Post } from "../app/models/post.model";

export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{posts : Post[]}>());
export const dummyAction = createAction('[dummy action]');
export const selection = createAction('selection',props<{ selectedPost: Post }>());