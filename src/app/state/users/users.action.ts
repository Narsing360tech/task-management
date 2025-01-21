import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/day-15/user-info/userModel';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: any }>());

export const updateUserStatus = createAction('[User] Update User Status', props<{ id: string; status: User['status'] }>());
export const updateUserStatusSuccess = createAction('[User] Update User Status Success', props<{ user: User }>());
export const updateUserStatusFailure = createAction('[User] Update User Status Failure', props<{ error: any }>());
