import { createReducer, on } from '@ngrx/store';
import * as PostsActions from './post.action';

export interface PostsState {
    posts: any[];
    loading: boolean;
    loaded: boolean;
    error: string | null;
}

export const initialState: PostsState = {
    posts: [],
    loading: false,
    loaded: false,
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
        loaded: false,
    })),
    on(PostsActions.loadPostsFailure, (state, { error }) => ({
        ...state,
        loaded: false,
        error,
    })),

    on(PostsActions.addPostData, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PostsActions.addPostDataSuccess, (state, { post }) => ({
        ...state,
        posts: [...state.posts, post],
        loaded: true,
        error: null,
    })),
    on(PostsActions.addPostDataFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),

    on(PostsActions.editPostData, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PostsActions.editPostDataSuccess, (state, { post }) => ({
        ...state,
        posts: state.posts.map((p) => (p.id === post.id ? post : p)),
        loading: false,
        error: null,
    })),
    on(PostsActions.editPostDataFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),
    on(PostsActions.deletePostData, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(PostsActions.deletePostDataSuccess, (state, { id }) => ({
        ...state,
        posts: state.posts.filter((post) => post.id !== id),
        loading: false,
        error: null,
    })),
    on(PostsActions.deletePostDataFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))

);
