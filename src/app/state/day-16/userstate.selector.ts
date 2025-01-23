import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./userstate.reducer";

export const selectUserState = createFeatureSelector<UserState>('userstate');

export const selectStateUsers = createSelector(
    selectUserState,
    (state: UserState) => state.users
);

export const selectStatusFilter = createSelector(
    selectUserState,
    (state: UserState) => state.statusFilter
);


export const selectSearchTerm = createSelector(
    selectUserState,
    (state: UserState) => state.searchTerm
);




export const selectFilteredUsers = createSelector(
    selectStateUsers,
    selectStatusFilter,
    selectSearchTerm,
    (users, statusFilter, searchTerm) => {
        return users.filter(user => {
            const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
            const matchesSearchTerm = !searchTerm || (user.username && user.username.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesStatus && matchesSearchTerm;
        });
    }
);