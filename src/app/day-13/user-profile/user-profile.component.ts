import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userInfo!: FormGroup;
  userProfile$ = new BehaviorSubject<any>(null);
  constructor(private fb: FormBuilder, private snackbar: MatSnackBar) {

  }
  ngOnInit(): void {
    this.formInitialize();
    this.loadUserProfile();

    this.userProfile$.subscribe((res) => {
      if (res) {
        this.userInfo.patchValue({
          fullName: res.fullName,
          email: res.email,
          number: res.number,
          address: res.address
        })
      }
    })
  }

  formInitialize() {
    this.userInfo = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.(com|in|co\.in)$/),
      emailDomainValidator()]],
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]+( [A-Za-z]+)*$'), Validators.maxLength(32)]],
      number: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      address: ['', [Validators.required]]
    })
  }

  loadUserProfile() {
    const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    this.userProfile$.next(userProfile);
  }

  onSubmit() {
    if (this.userInfo.valid) {
      const updatedForm = this.userInfo.value;
      localStorage.setItem('userProfile', JSON.stringify(updatedForm));
      this.userProfile$.next(updatedForm);
      this.snackbar.open('Form Updated Successfully')
    }
    else {
      this, this.snackbar.open('Failed to update form')
    }
  }

}

export function emailDomainValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control && control.value) {
      const email = control.value;
      const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.(com|in|co\.in)$/;
      const domainPart = email.split('@')[1];

      if (!emailRegex.test(email)) {
        return { invalidEmailFormat: true };
      }

      if (domainPart) {
        const dotCount = (domainPart.match(/\./g) || []).length;

        if (
          domainPart.includes('.com.com') ||
          domainPart.includes('.com.in') ||
          domainPart.includes('.in.in') ||
          domainPart.includes('.in.com') ||
          domainPart.includes('.co.com') ||
          domainPart.includes('.in.co.in') ||
          domainPart.includes('.co.in.com') ||
          domainPart.includes('.com.co.in') ||
          (dotCount > 1 && !domainPart.endsWith('.co.in')) ||
          dotCount > 2
        ) {
          return { invalidDomainStructure: true };
        }
      }

      return null;
    }
    return null;
  };
}
