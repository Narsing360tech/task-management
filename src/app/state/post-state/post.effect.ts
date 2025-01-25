import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as PostsActions from './post.action';
import { PostServiceService } from 'src/app/day-19/postmodule/service/post-service.service';

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostServiceService) { }

    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(PostsActions.loadPosts),
            mergeMap(() =>
                this.postsService.getPostData().pipe(
                    map((posts) => PostsActions.loadPostsSuccess({ posts })),
                    catchError((error) =>
                        of(PostsActions.loadPostsFailure({ error: error.message }))
                    )
                )
            )
        )
    );


}
