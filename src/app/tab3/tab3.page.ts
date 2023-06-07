import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone:true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule,ReactiveFormsModule]
})
export class Tab3Page {
  registrationForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      rollNumber: ['', Validators.required],
      hscCollege: ['', Validators.required],
      hscYear: ['', Validators.required],
      hscTotalMarks: ['', Validators.required],
      hscMarksObtained: ['', Validators.required],
      hscPercentage: [{ value: '', disabled: true }],
      sscSchool: ['', Validators.required],
      sscYear: ['', Validators.required],
      sscTotalMarks: ['', Validators.required],
      sscMarksObtained: ['', Validators.required],
      sscPercentage: [{ value: '', disabled: true }],
      cgpa: ['', Validators.required],
      percentage: [{ value: '', disabled: true }],
      additionalCourses: ['']
    });

    this.calculateHscPercentage();
    this.calculateSscPercentage();
    this.calculateOverallPercentage();
  }

  calculateHscPercentage() {
    this.registrationForm.get('hscPercentage')!.valueChanges.subscribe(() => {
      const totalMarks = this.registrationForm.get('hscTotalMarks')!.value;
      const obtainedMarks = this.registrationForm.get('hscMarksObtained')!.value;
      const percentage = (obtainedMarks / totalMarks) * 100;
      this.registrationForm.get('hscPercentage')!.setValue(percentage.toFixed(2), { emitEvent: false });
    });
  }

  calculateSscPercentage() {
    this.registrationForm.get('sscPercentage')!.valueChanges.subscribe(() => {
      const totalMarks = this.registrationForm.get('sscTotalMarks')!.value;
      const obtainedMarks = this.registrationForm.get('sscMarksObtained')!.value;
      const percentage = (obtainedMarks / totalMarks) * 100;
      this.registrationForm.get('sscPercentage')!.setValue(percentage.toFixed(2), { emitEvent: false });
    });
  }

  calculateOverallPercentage() {
    this.registrationForm.valueChanges.subscribe(() => {
      const hscPercentage = this.registrationForm.get('hscPercentage')!.value || 0;
      const sscPercentage = this.registrationForm.get('sscPercentage')!.value || 0;
      const cgpa = this.registrationForm.get('cgpa')!.value || 0;

      const overallPercentage = (parseFloat(hscPercentage) + parseFloat(sscPercentage) + parseFloat(cgpa)) / 3;
      this.registrationForm.get('percentage')!.setValue(overallPercentage.toFixed(2), { emitEvent: false });
    });
  }

  onSubmit() {
    // Handle form submission logic here
    if (this.registrationForm.valid) {
      // Form is valid, perform submission
      console.log(this.registrationForm.value);
      // Reset the form
      this.registrationForm.reset();
      // Redirect to a success page
      this.router.navigate(['/success']);
    } else {
      // Form is invalid, mark all fields as touched to display validation errors
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
