import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/services/common/form.service';

@Component({
  selector: 'app-form-contact-section',
  templateUrl: './form-contact-section.component.html',
  styleUrls: ['./form-contact-section.component.scss'],
})
export class FormContactSectionComponent {
  formData!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService : FormService
  ) {}


  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formData = this.fb.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(11)]],
      message: [null, Validators.required],
      subject: null,
    });
  }


  onSubmit() {
    if (this.formData.valid) {
      console.log('formData:', this.formData.value);
      this.postAllFormInfo()
      this.formData.reset();
    } else {
      console.log('not valid');
    }
  }


    // http req handle
    private postAllFormInfo(){
      this.formService.postAllFormInfo(this.formData.value)
      .subscribe({
        next:(res)=> {
           console.log(res);
        },
        error:(err) =>{
          console.log(err);
        }
      })
    }
}
