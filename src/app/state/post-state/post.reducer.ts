import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './post.action';

export interface PostsState {
    posts: any[];
    loading: boolean;
    error: string | null;
}

export const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
};

export const postsReducer = createReducer(
    initialState,
    on(PostsActions.loadPosts, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PostsActions.loadPostsSuccess, (state, { posts }) => ({
        ...state,
        posts,
        loading: false,
    })),
    on(PostsActions.loadPostsFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);
