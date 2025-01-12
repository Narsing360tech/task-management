import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addTask, updateTask } from 'src/app/state/task-management/task.action';
import { ITask } from '../task.interface';

@Component({
  selector: 'app-task-add-update-dailog',
  templateUrl: './task-add-update-dailog.component.html',
  styleUrls: ['./task-add-update-dailog.component.scss']
})
export class TaskAddUpdateDailogComponent implements OnInit {
  taskForm!: FormGroup;

  constructor(private dialogRef: MatDialogRef<TaskAddUpdateDailogComponent>,
    private store: Store,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: ITask,

  ) {

  }
  ngOnInit(): void {
    if (!this.data) {
      this.taskForm = this.fb.group({
        title: ['', [Validators.required, Validators.maxLength(100)]],
        description: ['', [Validators.required, Validators.maxLength(300)]],
        dueDate: ['', Validators.required],
        status: ['', Validators.required],
      });
    }
    else {
      this.taskForm = this.fb.group({
        title: [this.data.title, [Validators.required, Validators.maxLength(100)]],
        description: [this.data.description, [Validators.required, Validators.maxLength(300)]],
        dueDate: [this.data.dueDate, Validators.required],
        status: [this.data.status, Validators.required],
      })
    }
  }

  taskStatus = [{
    id: 'Pending', name: 'pending',
  },
  {
    id: 'Complete', name: 'Complete',
  },
  {
    id: 'Process', name: 'process',
  }
  ]

  onAddTask() {
    if (this.taskForm.valid) {
      const payload = { ...this.taskForm.value };
      this.store.dispatch(addTask({ newTask: payload }));
      this.dialogRef.close();
    }
  }

  onUpdateTask() {
    if (this.taskForm.valid) {
      const payload = { ...this.taskForm.value };
      this.store.dispatch(updateTask({ newTask: payload, id: this.data.id }));
      this.dialogRef.close();
    }
  }
  onCancel() {
    this.dialogRef.close();
  }

}
