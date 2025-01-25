import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss']
})
export class AddEditPostComponent implements OnInit {
  myForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
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
  ngOnInit(): void {
    if (this.data) {
      this.myForm.patchValue({
        title: this.data.title,
        body: this.data.body
      })
    }

  }

  addForm() {

  }

}
