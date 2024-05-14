import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { postReducer } from '../reducers/post.reducer'

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  postsReducer : postReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
