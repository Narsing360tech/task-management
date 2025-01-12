import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskState } from "./task.reducer";

const getAllTaskState = createFeatureSelector<TaskState>('tasks');

export const selectTask = createSelector(
    getAllTaskState,
    (state: TaskState) => state.tasks
);

export const selectLoaded = createSelector(
    getAllTaskState,
    (state: TaskState) => state.loaded
);


