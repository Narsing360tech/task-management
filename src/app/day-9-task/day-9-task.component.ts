import { Component, OnInit } from '@angular/core';
import { TaskManagmentService } from '../service/task-managment.service';

@Component({
  selector: 'app-day-9-task',
  templateUrl: './day-9-task.component.html',
  styleUrls: ['./day-9-task.component.scss']
})
export class Day9TaskComponent implements OnInit {
  imagesList: any[] = [];
  ngOnInit(): void {

  }
  constructor(private taskService: TaskManagmentService) {
    this.getAllImages();
  }

  getAllImages() {
    this.taskService.getImages().subscribe((res: any) => {
      this.imagesList = res;
    })
  }



}
