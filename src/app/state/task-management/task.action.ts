import { createAction, props } from "@ngrx/store";

export const loadTasks = createAction('[Task] Load Tasks');

export const loadTasksSuccess = createAction(
    '[Task] Load Tasks Success',
    props<{ tasks: any[] }>()
);

export const loadTasksFailure = createAction(
    '[Task] Load Tasks Failure',
    props<{ error: any }>()
);


export const addTask = createAction(
    '[Task] Add Task',
    props<{ newTask: any }>()
);

export const addTaskSuccess = createAction(
    '[Task] Add Task Success',
    props<{ task: any }>()
);

export const addTaskFailure = createAction(
    '[Task] Add Task Failure',
    props<{ error: any }>()
);

export const updateTask = createAction(
    '[Task] Update Task',
    props<{ newTask: any, id: any }>()
);

export const updateTaskSuccess = createAction(
    '[Task] Update Task Success',
    props<{ task: any }>()
);

export const updateTaskFailure = createAction(
    '[Task] Update Task Failure',
    props<{ error: any }>()
);

export const deleteTask = createAction(
    '[Task] Delete Task',
    props<{ id: any }>()
);

