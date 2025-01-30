import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './post.reducer';

export const selectPostsState = createFeatureSelector<PostsState>('posts');

export const selectAllPosts = createSelector(
    selectPostsState,
    (state) => state.posts
);

export const selectLoading = createSelector(
    selectPostsState,
    (state) => state.loading
);

export const selectError = createSelector(
    selectPostsState,
    (state) => state.error
);
