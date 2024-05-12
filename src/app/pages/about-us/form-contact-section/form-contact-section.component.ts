import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-contact-section',
  templateUrl: './form-contact-section.component.html',
  styleUrls: ['./form-contact-section.component.scss'],
})
export class FormContactSectionComponent {
  formData!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formData = this.fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(6)]],
      message: [null, Validators.required],
      subject: null,
    });
  }
  onSubmit() {
    if (this.formData.valid) {
      console.log('formData:', this.formData.value);
      this.formData.reset();
    } else {
      console.log('not valid');
    }
  }
}
