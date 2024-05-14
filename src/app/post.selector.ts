import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./models/post.model";

const getPostsState = createFeatureSelector<PostsState>('postsReducer');

export const getPosts = createSelector(getPostsState , (state)=>{
    return state.posts
})

export const getCurrentPosts = createSelector(getPostsState , (state)=>{
    return state.currentPost
})