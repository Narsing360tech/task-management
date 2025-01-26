import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as PostsActions from './post.action';
import { PostServiceService } from 'src/app/day-19/postmodule/service/post-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostServiceService, private snackBar: MatSnackBar) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.loadPosts),
            switchMap(() =>
                this.postsService.getPostData().pipe(
                    map((posts) => PostsActions.loadPostsSuccess({ posts })),
                    catchError((error) =>
                        of(PostsActions.loadPostsFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    addPostData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.addPostData),
            switchMap((action) =>
                this.postsService.addPostData(action.postdata).pipe(
                    map((post) => PostsActions.addPostDataSuccess({ post })),
                    catchError((error) => of(PostsActions.addPostDataFailure({ error })))
                )
            )
        )
    );

    addPostDataSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(PostsActions.addPostDataSuccess),
                tap(() => {
                    this.snackBar.open('Post added successfully!', 'Close', {
                        duration: 3000,
                    });
                })
            ),
        { dispatch: false }
    );

    addPostDataFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(PostsActions.addPostDataFailure),
                tap((action) => {
                    this.snackBar.open(`Failed to add post: ${action.error.message}`, 'Close', {
                        duration: 3000,
                    });
                })
            ),
        { dispatch: false }
    );

    editPost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.editPostData),
            switchMap(({ id, newPostData }) =>
                this.postsService.editPostData(id, newPostData).pipe(
                    map((updatedPost) =>
                        PostsActions.editPostDataSuccess({ post: updatedPost })
                    ),
                    catchError((error) =>
                        of(PostsActions.editPostDataFailure({ error }))
                    )
                )
            )
        )
    );

    editPostSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(PostsActions.editPostDataSuccess),
                tap(({ post }) => {
                    this.snackBar.open('Post Updated successfully!', 'Close', {
                        duration: 3000,
                    });
                })
            ),
        { dispatch: false }
    );

    editPostFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(PostsActions.editPostDataFailure),
                tap(({ error }) => {
                    this.snackBar.open('Post Updated Failed!', 'Close', {
                        duration: 3000,
                    });
                })
            ),
        { dispatch: false }
    );
    deletePost$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.deletePostData),
            switchMap(({ id }) =>
                this.postsService.deletePostData(id).pipe(
                    map(() => PostsActions.deletePostDataSuccess({ id })),
                    catchError((error) =>
                        of(PostsActions.deletePostDataFailure({ error }))
                    )
                )
            )
        )
    );

    deletePostSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(PostsActions.deletePostDataSuccess),
                tap(({ id }) => {
                    this.snackBar.open('Post Delete successfully !', 'Close', {
                        duration: 3000,
                    });
                })
            ),
        { dispatch: false }
    );

    deletePostFailure$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(PostsActions.deletePostDataFailure),
                tap(({ error }) => {
                    this.snackBar.open('Post Delete Failed !', 'Close', {
                        duration: 3000,
                    });
                })
            ),
        { dispatch: false }
    );

}
