import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { deletePostData, loadPosts } from 'src/app/state/post-state/post.action';
import { selectAllPosts } from 'src/app/state/post-state/post.selector';
import { AddEditPostComponent } from '../add-edit-post/add-edit-post.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent {
  postData: any[] = [];
  constructor(private store: Store, private dialog: MatDialog, private router: Router) {
    this.store.dispatch(loadPosts());

    this.store.pipe(select(selectAllPosts)).subscribe((res: any) => {
      this.postData = res;
    });

  }

  editPost(post: any): void {
    const dialogRef = this.dialog.open(AddEditPostComponent, {
      width: '400px',
      autoFocus: false,
      data: post
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with data:', result);
      }
    })
  }

  goToDetails(id: string): void {
    this.router.navigate(['/postModule/details', id]);
  }

  deletePost(post: any): void {
    this.store.dispatch(deletePostData({ id: post.id }));
  }

  openAddPost() {
    const dialogRef = this.dialog.open(AddEditPostComponent, {
      width: '400px',
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Dialog closed with data:', result);
      }
    }
    );

  }



}
