import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction('[Posts] Load Posts');
export const loadPostsSuccess = createAction(
    '[Posts] Load Posts Success',
    props<{ posts: any[] }>()
);
export const loadPostsFailure = createAction(
    '[Posts] Load Posts Failure',
    props<{ error: string }>()
);

export const addPostData = createAction(
    '[Post] Add Post Data',
    props<{ postdata: any }>()
);

export const addPostDataSuccess = createAction(
    '[Post] Add Post Data Success',
    props<{ post: any }>()
);

export const addPostDataFailure = createAction(
    '[Post] Add Post Data Failure',
    props<{ error: any }>()
);


export const editPostData = createAction(
    '[Post] Edit Post Data',
    props<{ id: string; newPostData: any }>()
);

export const editPostDataSuccess = createAction(
    '[Post] Edit Post Data Success',
    props<{ post: any }>()
);

export const editPostDataFailure = createAction(
    '[Post] Edit Post Data Failure',
    props<{ error: any }>()
);

export const deletePostData = createAction(
    '[Post] Delete Post Data',
    props<{ id: string }>()
);

export const deletePostDataSuccess = createAction(
    '[Post] Delete Post Data Success',
    props<{ id: string }>()
);

export const deletePostDataFailure = createAction(
    '[Post] Delete Post Data Failure',
    props<{ error: any }>()
);

