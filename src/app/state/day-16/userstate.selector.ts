import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./userstate.reducer";

export const selectUserState = createFeatureSelector<UserState>('userstate');

export const selectStateUsers = createSelector(
    selectUserState,
    (state: UserState) => state.users
);