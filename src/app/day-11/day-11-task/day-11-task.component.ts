import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TaskManagmentService } from 'src/app/service/task-managment.service';

@Component({
  selector: 'app-day-11-task',
  templateUrl: './day-11-task.component.html',
  styleUrls: ['./day-11-task.component.scss']
})
export class Day11TaskComponent {
  imagesList: any[] = [];
  filteredList: any[] = [];
  searchText: any;

  @ViewChildren('cardItem') cardItems!: QueryList<ElementRef>

  constructor(private taskService: TaskManagmentService, private renderer: Renderer2) {
    this.searchText = new FormControl('')
    this.searchText.valueChanges.subscribe((value: any) => {
      this.getFilteredList(value);
    });
    this.getAllImages();
  }
  ngAfterViewChecked() {
    this.cardItems?.toArray().forEach((card) => {
      if (card) {
        this.renderer.setStyle(card.nativeElement, 'border', '3px solid lightblue');
      }
    });
  }

  getAllImages() {
    this.taskService.getImages().subscribe((res: any) => {
      this.imagesList = res;
      this.filteredList = res;
    })
  }
  getFilteredList(searchText: any) {
    if (!searchText) {
      this.filteredList = this.imagesList;
    } else {
      this.filteredList = this.imagesList.filter(image =>
        image.author.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }

}
