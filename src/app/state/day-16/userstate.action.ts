import { createAction, props } from "@ngrx/store";

export const addUser = createAction(
    '[User] Add User',
    props<{ user: any, isFrom: boolean }>()
);

export const addUserSuccess = createAction(
    '[User] Add User Success',
    props<{ user: any, isForm: any }>()
);

export const addUserFailure = createAction(
    '[User] Add User Failure',
    props<{ error: string }>()
);

export const updateUser = createAction(
    '[User] Update User',
    props<{ user: any }>()
);

export const updateUserSuccess = createAction(
    '[User] Update User Success',
    props<{ user: any }>()
);

export const updateUserFailure = createAction(
    '[User] Update User Failure',
    props<{ error: string }>()
);

export const deleteUser = createAction(
    '[User] Delete User',
    props<{ id: number }>()
);

export const deleteUserSuccess = createAction(
    '[User] Delete User Success',
    props<{ id: number }>()
);

export const deleteUserFailure = createAction(
    '[User] Delete User Failure',
    props<{ error: string }>()
);