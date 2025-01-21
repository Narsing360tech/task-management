import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addUser, updateUser } from 'src/app/state/day-16/userstate.action';

@Component({
  selector: 'app-createorupdate',
  templateUrl: './createorupdate.component.html',
  styleUrls: ['./createorupdate.component.scss']
})
export class CreateorupdateComponent {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private store: Store,
    public dialogRef: MatDialogRef<CreateorupdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      remark: ['', Validators.required],
      status: ['', Validators.required]
    });

    if (this.data) {
      this.userForm.patchValue({
        username: this.data.username,
        remark: this.data.remark,
        status: this.data.status
      })
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      if (!this.data) {
        this.store.dispatch(addUser({ user: userData, isFrom: true }));
        this.dialogRef.close();
      }
      else {
        this.store.dispatch(updateUser({ user: userData }));
        this.dialogRef.close();
      }

    }
  }

}
