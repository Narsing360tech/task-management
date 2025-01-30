import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subscription, takeUntil } from 'rxjs';
import { addPostData, addPostDataSuccess, editPostData } from 'src/app/state/post-state/post.action';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEditPostComponent implements OnInit, OnDestroy {
  myForm !: FormGroup;
  subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store,
    private actions$: Actions,
    public dialogRef: MatDialogRef<AddEditPostComponent>
  ) {
    this.subscription = new Subscription();

    this.myForm = this.fb.group({
      title: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(100)]
      ],
      body: [
        '',
        [Validators.required, Validators.minLength(10)]
      ]
    });
  }
  ngOnDestroy(): void {

  }
  ngOnInit(): void {
    if (this.data) {
      this.myForm.patchValue({
        title: this.data.title,
        body: this.data.body
      })
      this.listenForSuccessAction();
    }

  }

  private listenForSuccessAction(): void {
    this.subscription.add(this.actions$.pipe(
      ofType(addPostDataSuccess),
    ).subscribe(() => {
      this.closeDialog();
    }));
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    if (!this.data) {
      this.store.dispatch(addPostData({ postdata: this.myForm.value }));
      this.closeDialog();
    }
    else {
      this.store.dispatch(editPostData({ id: this.data.id, newPostData: this.myForm.value }));
      this.closeDialog();
    }
  }

}
