import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { emailDomainValidator } from 'src/app/day-13/user-profile/user-profile.component';

@Component({
  selector: 'app-task-number-22',
  templateUrl: './task-number-22.component.html',
  styleUrls: ['./task-number-22.component.scss']
})
export class TaskNumber22Component implements OnInit {
  userInfo!: FormGroup;
  showPassword = false;
  showConfirmPassword = false;
  ngOnInit(): void {
    this.formInitialize()
  }

  constructor(private fb: FormBuilder) { }

  formInitialize() {
    this.userInfo = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.(com|in|co\.in)$/),
      emailDomainValidator()]],
      Name: ['', [Validators.required, Validators.pattern('[A-Za-z]+( [A-Za-z]+)*$'), Validators.minLength(3)]],
      number: ['', [Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, this.passwordValidator(),
      Validators.minLength(8),
      Validators.maxLength(30)]],
      confirmPassword: ['', [Validators.required,
      this.confirmPasswordValidator('password'),
      Validators.maxLength(30)]]

    })
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  preventInvalidInput(event: KeyboardEvent): void {
    const invalidChars = ['e', 'E', '+', '-', '.'];

    if (
      invalidChars.includes(event.key) ||
      event.key === 'ArrowDown' ||
      event.key === 'ArrowUp'
    ) {
      event.preventDefault();
    }
  }

  onContactNumberChange(event: any) {
    let value = event.target.value;

    value = value.replace(/\D/g, '');
    value = value.replace(/^0+/, '');

    value = value.slice(0, 10);

    this.userInfo.get('number')?.setValue(value, { emitEvent: false });
  }


  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) {
        return { required: true };
      }

      const hasUppercase = /[A-Z]/.test(control.value);
      const hasLowercase = /[a-z]/.test(control.value);
      const hasDigit = /[0-9]/.test(control.value);
      const hasSymbol = /[^A-Za-z0-9]/.test(control.value);
      const hasNoSpaces = !/\s/.test(control.value);

      const errors: { [key: string]: boolean } = {};

      if (!hasUppercase) {
        errors['uppercase'] = true;
      }

      if (!hasLowercase) {
        errors['lowercase'] = true;
      }

      if (!hasDigit) {
        errors['digit'] = true;
      }

      if (!hasSymbol) {
        errors['symbol'] = true;
      }

      if (!hasNoSpaces) {
        errors['noSpaces'] = true;
      }

      return Object.keys(errors).length ? errors : null;
    };
  }

  confirmPasswordValidator(
    passwordControlName: string
  ): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const passwordControl = control.root.get(passwordControlName);
      if (!passwordControl) {
        return null;
      }
      const password = passwordControl.value;
      const confirmPassword = control.value;
      if (password !== confirmPassword) {
        return { confirmPassword: true };
      }
      passwordControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
      return null;
    };
  }

  SaveData() {
    console.log(this.userInfo.value);
  }


  togglePassword() {
    this.showPassword = !this.showPassword;
  }


}
