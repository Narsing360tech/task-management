import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { TaskList } from './task-list-model';
import { TaskAddUpdateDailogComponent } from '../task-add-update-dailog/task-add-update-dailog.component';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { deleteTask, loadTasks } from 'src/app/state/task-management/task.action';
import { selectLoaded, selectTask } from 'src/app/state/task-management/task.selecter';
import { ITask } from '../task.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-task-list-componant',
  templateUrl: './task-list-componant.component.html',
  styleUrls: ['./task-list-componant.component.scss']
})
export class TaskListComponantComponent implements OnInit {
  taskModel!: TaskList;
  isLoaded: boolean = false;
  @Input() appFilter!: ITask[];
  @Input() filterTitle: string = '';
  @Input() filterDate: string = '';
  @Input() sortBy: string = 'asc';

  private filteredDataSubject = new BehaviorSubject<ITask[]>([]);
  filteredData$ = this.filteredDataSubject.asObservable();

  constructor(public dialog: MatDialog, public store: Store) {
    this.taskModel = new TaskList;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appFilter'] || changes['filterTitle'] || changes['filterDate'] || changes['sortBy']) {
      this.applyFiltersAndSort();
    }
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
  }
  private applyFiltersAndSort(): void {

  }

  AddTask() {
    const dialogRef = this.dialog.open(TaskAddUpdateDailogComponent, {
      width: '800px',
      disableClose: true,
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
    //     this.getAllGroups('');
    //   }
    // });
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
