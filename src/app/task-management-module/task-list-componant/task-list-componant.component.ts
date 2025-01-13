import { Component, Input, OnInit } from '@angular/core';
import { TaskList } from './task-list-model';
import { TaskAddUpdateDailogComponent } from '../task-add-update-dailog/task-add-update-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { deleteTask, loadTasks } from 'src/app/state/task-management/task.action';
import { selectLoaded, selectTask } from 'src/app/state/task-management/task.selecter';
import { ITask } from '../task.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-list-componant',
  templateUrl: './task-list-componant.component.html',
  styleUrls: ['./task-list-componant.component.scss']
})
export class TaskListComponantComponent implements OnInit {
  taskModel!: TaskList;
  isLoaded: boolean = false;
  titleFilter = new FormControl('');
  dateFilter = new FormControl('');
  sortBy = new FormControl('asc');


  private filteredDataSubject = new BehaviorSubject<ITask[]>([]);
  filteredData$ = this.filteredDataSubject.asObservable();

  constructor(public dialog: MatDialog, public store: Store) {
    this.taskModel = new TaskList;
  }



  ngOnInit(): void {
    this.store.pipe(select(selectLoaded)).subscribe((res) => {
      this.isLoaded = res;
    })
    if (!this.isLoaded) {
      this.store.dispatch(loadTasks());
    }
    this.store.pipe(select(selectTask)).subscribe((res) => {
      this.taskModel.dataSource = res;
    })
    this.titleFilter.valueChanges.subscribe(() => {
      this.filterData();
    });
    this.dateFilter.valueChanges.subscribe(() => {
      this.filterData();
    });
    this.sortBy.valueChanges.subscribe(() => {
      this.filterData();
    });
  }

  trackByRow(index: number, row: any): any {
    return row.id || row;
  }

  trackByColumn(index: number, column: any): string {
    return column.id;
  }
  filterData() {
    const filteredData = this.taskModel.dataSource.filter(task => {
      const matchesTitle = this.titleFilter.value ? task.title.toLowerCase().includes(this.titleFilter.value.toLowerCase()) : true;
      const matchesDate = this.dateFilter.value ? task.date === this.dateFilter.value : false;
      return matchesTitle && matchesDate;
    });

    const sortDirection = this.sortBy.value === 'asc' ? 1 : -1;
    filteredData.sort((a, b) => a.title.localeCompare(b.title) * sortDirection);

    const filterData = filteredData.length > 0 ? filteredData : [...this.taskModel.dataSource];
    console.log("filterData", filterData);
    this.taskModel.dataSource = filterData;
  }

  AddTask() {
    const dialogRef = this.dialog.open(TaskAddUpdateDailogComponent, {
      width: '800px',
      disableClose: true,
    });
  }

  updateTask(task: ITask) {
    const dialogRef = this.dialog.open(TaskAddUpdateDailogComponent, {
      width: '800px',
      disableClose: true,
      data: task
    });
  }

  deleteTask(element: any) {
    this.store.dispatch(deleteTask({ id: element.id }));
  }


  getDisplayedGroupsIds(): string[] {
    return this.taskModel.displayedColumns.map((column) => column.id);
  }


}
