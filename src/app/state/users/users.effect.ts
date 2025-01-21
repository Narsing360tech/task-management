import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadUsers, loadUsersSuccess, loadUsersFailure, updateUserStatus, updateUserStatusSuccess, updateUserStatusFailure } from './users.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { LocalServiceService } from 'src/app/day-15/service/local-service.service';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private localStorage: LocalServiceService) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadUsers),
            switchMap(() => {
                try {
                    const users = this.localStorage.getUsers();
                    return of(loadUsersSuccess({ users }));
                } catch (error) {
                    return of(loadUsersFailure({ error }));
                }
            })
        )
    );

    updateUserStatus$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateUserStatus),
            switchMap(({ id, status }) => {
                try {
                    let users = this.localStorage.getUsers();
                    const userIndex = users.findIndex((u) => u.id === id);
                    if (userIndex > -1) {
                        users[userIndex] = { ...users[userIndex], status };
                        this.localStorage.saveUsers(users);
                        return of(updateUserStatusSuccess({ user: users[userIndex] }));
                    }
                    throw new Error('User not found');
                } catch (error) {
                    return of(updateUserStatusFailure({ error }));
                }
            }),
            catchError((error) => of(updateUserStatusFailure({ error })))
        )
    );
}
