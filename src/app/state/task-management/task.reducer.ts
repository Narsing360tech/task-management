import { createReducer, on } from "@ngrx/store";
import { addTask, addTaskFailure, addTaskSuccess, deleteTask, loadTasks, loadTasksFailure, loadTasksSuccess, updateTask, updateTaskFailure, updateTaskSuccess } from "./task.action";
import { filter } from "rxjs";


export interface TaskState {
    tasks: any[];
    loading: boolean;
    loaded: boolean;
    error: any;
}

export const initialState: TaskState = {
    tasks: [],
    loading: false,
    loaded: false,
    error: null,
};

export const taskReducer = createReducer(
    initialState,
    on(loadTasks, (state) => ({
        ...state,
        loading: true
    })),
    on(loadTasksSuccess, (state, { tasks }) => ({
        ...state,
        tasks,
        loading: false
    })),
    on(loadTasksFailure,
        (state, { error }) =>
        ({
            ...state,
            error,
            loading: false
        })),

    on(addTask, (state) => ({
        ...state,
        loading: true,
        error: null
    })),

    on(addTaskSuccess, (state) => (
        {
            ...state,
            loaded: false,
            loading: false
        })),
    on(addTaskFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    on(updateTask, (state, { newTask, id }) => {
        return {
            ...state,
            tasks: state.tasks.map((t) =>
                t.id == id ? { ...t, ...newTask } : t
            ),
            loading: false,
        };
    }),

    on(deleteTask, (state, { id }) => ({
        ...state,
        tasks: state.tasks.filter(item => item.id !== id),
        loaded: false
    })),



);
