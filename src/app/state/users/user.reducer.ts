import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/day-15/user-info/userModel';
import { loadUsersSuccess, updateUserStatusSuccess } from './users.action';

export interface UserState {
    users: User[];
    isLoading: boolean
}

export const initialState: UserState = {
    users: [],
    isLoading: false
};

export const userReducer = createReducer(
    initialState,


    on(loadUsersSuccess, (state, { users }) => ({
        ...state, users
    })),


    on(updateUserStatusSuccess, (state, { user }) => ({
        ...state,
        users: state.users.map((u) => (u.id === user.id ? user : u)),
    }))
);
