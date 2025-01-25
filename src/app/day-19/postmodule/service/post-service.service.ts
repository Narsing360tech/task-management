import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  postUrl = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }

  getPostData(): Observable<any> {
    return this.http.get(this.postUrl);
  }

  addPostData(postdata: any): Observable<any> {
    return this.http.post(this.postUrl, postdata);
  }

  editPostData(newPostData: any, id: string) {
    return this.http.put(`${this.postUrl}/${id}`, newPostData);
  }

  deletePostData(id: string) {
    return this.http.delete(`${this.postUrl}/${id}`);
  }


}
