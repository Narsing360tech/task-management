// user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import * as UserActions from './userstate.action';
import { UserServiceService } from 'src/app/day-16/service/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class UserStateEffects {
    constructor(
        private actions$: Actions,
        private userService: UserServiceService,
        private store: Store,
        private snackBar: MatSnackBar
    ) { }

    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.addUser),
            switchMap((action) => {
                try {
                    console.log(action.user);
                    const data = localStorage.getItem('userStateData');
                    const previousData = data ? JSON.parse(data) : [];
                    const newUser = action.isFrom ? { ...action.user, id: Date.now() } : action.user;
                    if (action.isFrom) {
                        previousData.push(newUser);
                        localStorage.setItem('userStateData', JSON.stringify(previousData));
                    }
                    return of(UserActions.addUserSuccess({ user: newUser, isForm: action.isFrom }));
                } catch (error: any) {
                    return of(UserActions.addUserFailure({ error }));
                }
            })
        )
    );


    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.updateUser),
            switchMap((action) => {
                try {
                    const data = localStorage.getItem('userStateData');
                    const previousData = data ? JSON.parse(data) : [];
                    const updatedData = previousData.map((user: any) =>
                        user.id === action.user.id ? { ...user, ...action.user } : user
                    );
                    localStorage.setItem('userStateData', JSON.stringify(updatedData));
                    return of(UserActions.updateUserSuccess({ user: action.user }));
                } catch (error: any) {
                    return of(UserActions.updateUserFailure({ error }));
                }
            })
        )
    );

    failedUpdateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.updateUserFailure),
            tap((action: { error: any; }) => {
                this.snackBar.open("Failed to update", "Close", {
                    duration: 3000
                });
            })
        ), { dispatch: false }
    );



    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.deleteUser),
            switchMap((action) => {
                try {

                    const data = localStorage.getItem('userStateData');
                    const previousData = data ? JSON.parse(data) : [];
                    const filteredData = previousData.filter((user: any) => user.id !== action.id);
                    localStorage.setItem('userStateData', JSON.stringify(filteredData));
                    return of(UserActions.deleteUserSuccess({ id: action.id }));
                } catch (error: any) {
                    return of(UserActions.deleteUserFailure({ error }));
                }
            })
        )
    );

}
