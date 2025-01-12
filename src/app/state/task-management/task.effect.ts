import { Injectable } from "@angular/core";

import * as allTask from './task.action';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, take } from "rxjs";
import { TaskManagmentService } from "src/app/service/task-managment.service";
import { addTask, addTaskFailure, addTaskSuccess, updateTask, updateTaskFailure, updateTaskSuccess } from "./task.action";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class AllTaskEffect {
    constructor(private actions$: Actions, private snackBar: MatSnackBar, private taskService: TaskManagmentService
    ) {

    }
    fetchAllTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(allTask.loadTasks),
            switchMap(() =>
                this.taskService.getAllTask().pipe(
                    map((tasks: any) => allTask.loadTasksSuccess({ tasks })),
                    catchError((error) => of(allTask.loadTasksFailure({ error })))
                )
            )
        )
    );

    addTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTask),
            switchMap((action) =>
                this.taskService.addTask(action.newTask).pipe(
                    map((task) => addTaskSuccess({ task })),
                    catchError((error) => of(addTaskFailure({ error })))
                )
            )
        )
    );

    addTaskSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTaskSuccess),
            map((action) => {
                this.snackBar.open("Added successfully")
                return;
            })
        ),
        { dispatch: false }
    );

    addTaskFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTaskFailure),
            map((action) => {
                this.snackBar.open("failed to add");
                return;
            })
        ),
        { dispatch: false }
    );

    // updateTask$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(updateTask),
    //         switchMap((action) => {
    //             console.log("action", action);
    //             return this.taskService.updateTask(action.newTask, action.id).pipe(
    //                 map((task) => allTask.updateTaskSuccess({ task })),
    //                 catchError((error) => of(updateTaskFailure({ error })))
    //             )
    //         }

    //         )
    //     )
    // );

    // updateSuccess$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(updateTaskSuccess),
    //         map((action) => {
    //             this.snackBar.open("updated successfully")
    //             return;
    //         })
    //     ),
    //     { dispatch: false }
    // );

    // updateFailure$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(allTask.updateTaskFailure),
    //         map((action) => {
    //             this.snackBar.open("failed to Update");
    //             return;
    //         })
    //     ),
    //     { dispatch: false }
    // );

}