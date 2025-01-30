import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { selectAllPosts } from 'src/app/state/post-state/post.selector';
import { IPost } from '../post.model';

@Component({
  selector: 'app-display-single-data',
  templateUrl: './display-single-data.component.html',
  styleUrls: ['./display-single-data.component.scss']
})
export class DisplaySingleDataComponent implements OnInit {
  postId!: string | null;
  postData!: IPost;
  constructor(private activeRoute: ActivatedRoute, private store: Store) {

  }
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.postId = id;
    this.store.pipe(select(selectAllPosts)).subscribe((res: any) => {
      this.postData = res.find((post: any) => {
        return post.id == this.postId
      });
    });
  }
}
