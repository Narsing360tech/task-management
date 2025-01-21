import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(selectUserState, (state) => state.users);

export const selectUsersByStatus = (status: string) =>
    createSelector(selectAllUsers, (users) => users.filter((user) => user.status === status));
