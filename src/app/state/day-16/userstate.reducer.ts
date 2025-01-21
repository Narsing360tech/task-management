
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './userstate.action';


export interface UserState {
    users: any[];
    loading: boolean;
    error: string | null;
}

export const initialState: UserState = {
    users: [],
    loading: false,
    error: null
};

export const userstateReducer = createReducer(
    initialState,
    on(UserActions.addUser, (state) => ({ ...state, loading: true })),
    on(UserActions.addUserSuccess, (state, { user, isForm }) => ({
        ...state,
        loading: false,
        users: isForm ? [...state.users, user] : [...state.users, ...user]
    })),
    on(UserActions.addUserFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(UserActions.updateUser, (state) => ({ ...state, loading: true })),
    on(UserActions.updateUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        users: state.users.map((u) => (u.id === user.id ? { ...u, ...user } : u))
    })),
    on(UserActions.updateUserFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    on(UserActions.deleteUser, (state) => ({ ...state, loading: true })),
    on(UserActions.deleteUserSuccess, (state, { id }) => ({
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== id)
    })),
    on(UserActions.deleteUserFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
);
