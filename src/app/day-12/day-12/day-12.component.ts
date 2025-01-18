import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-day-12',
  templateUrl: './day-12.component.html',
  styleUrls: ['./day-12.component.scss'],
})
export class Day12Component {
  loanForm: FormGroup;
  employmentTypeOptions = ['Employed', 'Self-Employed', 'Unemployed'];
  loanPurposeOptions = ['Education', 'Home', 'Vehicle', 'Other'];

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      personalInfo: this.fb.group({
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        age: ['', [Validators.required, Validators.min(18), Validators.max(70)]],
      }),
      employmentDetails: this.fb.group({
        employmentType: ['', Validators.required],
        employerName: [''],
        annualIncome: [''],
      }),
      loanDetails: this.fb.group({
        loanAmount: ['', Validators.required],
        loanPurpose: ['', Validators.required],
        otherPurposeDescription: [''],
      }),
      termsAggred: [false, Validators.requiredTrue],
    });

    this.handlingState();
  }

  handlingState() {
    this.loanForm.get('employmentDetails.employmentType')?.valueChanges.subscribe((value) => {
      const employerNameControl = this.loanForm.get('employmentDetails.employerName');
      const annualIncomeControl = this.loanForm.get('employmentDetails.annualIncome');
      const age = this.loanForm.get('personalInfo.age');

      if (value === 'Employed') {
        employerNameControl?.setValidators([Validators.required]);
        annualIncomeControl?.setValidators([Validators.required, this.incomeValiator()]);
      } else if (value === 'Self-Employed') {
        employerNameControl?.clearValidators();
        annualIncomeControl?.setValidators([Validators.required, this.incomeValiator()]);
      } else {
        employerNameControl?.clearValidators();
        annualIncomeControl?.clearValidators();
      }
      employerNameControl?.updateValueAndValidity();
      annualIncomeControl?.updateValueAndValidity();
    });

    this.loanForm.get('loanDetails.loanPurpose')?.valueChanges.subscribe((value) => {
      const otherPurposeControl = this.loanForm.get('loanDetails.otherPurposeDescription');
      if (value === 'Other') {
        otherPurposeControl?.setValidators([Validators.required]);
      } else {
        otherPurposeControl?.clearValidators();
      }
      otherPurposeControl?.updateValueAndValidity();
    });

    this.loanForm.get('employmentDetails.annualIncome')?.valueChanges.subscribe((value) => {
      if (value) {
        const loanAmountControl = this.loanForm.get('loanDetails.loanAmount');
        loanAmountControl?.updateValueAndValidity();
        loanAmountControl?.clearValidators();
      }
    });
  }

  incomeValiator() {
    return (control: any) => {
      const age = this.loanForm.get('personalInfo.age')?.value;
      const minimumIncome = age < 30 ? 15000 : 25000;
      return control.value >= minimumIncome ? null : { minimumIncome: { required: minimumIncome } };
    };
  }

  loanAmountValiator() {
    return (control: any) => {
      const annualIncome = this.loanForm.get('employmentDetails.annualIncome')?.value;
      if (annualIncome && control.value > annualIncome * 10) {
        return { maxLoanAmount: true };
      }
      return null;
    };
  }

  onSubmit() {
    if (this.loanForm.valid) {
      console.log('Form Submitted', this.loanForm.value);
    }
  }
}
