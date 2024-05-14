import { Action, createReducer, on } from "@ngrx/store";
import { selection, loadPostsSuccess } from "../post.action";
import { PostsState, Post } from "../models/post.model";

export const initialState : PostsState = {
    posts : [],
    currentPost : {
        id: 0,
        userId: 0,
        title: "",
        body: ""
    }
}

const _postReducer = createReducer(initialState,
    on(loadPostsSuccess, (state, action) => {
        return{
          ...state, posts : action.posts
        }
      }),
    on(selection, (state, action) => {
        return{
            ...state, currentPost : action.selectedPost
        }
    })
);

export function postReducer (state: PostsState | undefined, action: Action){
    return _postReducer(state, action);
}