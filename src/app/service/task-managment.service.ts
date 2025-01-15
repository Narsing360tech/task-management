import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskManagmentService {
  url = 'http://localhost:3000/tasks';
  imgUrl = "https://picsum.photos/v2/list";
  constructor(private http: HttpClient) {

  }

  getAllTask() {
    return this.http.get(this.url)
  }

  addTask(newTask: any) {
    return this.http.post(this.url, newTask)
  }

  updateTask(newTask: any, id: any) {
    return this.http.put(`${this.url}/${id}`, newTask)
  }

  getImages() {
    return this.http.get(this.imgUrl);
  }


}
