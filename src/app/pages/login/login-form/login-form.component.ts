import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  formData!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formData = this.fb.group({
      fname: [null,Validators.required],
      lname: [null,Validators.required],
      email: [null,[Validators.required,Validators.email]],
      password: [null,[Validators.required,Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if(this.formData.valid){
      console.log('formData:', this.formData.value);
      this.formData.reset();
    }else{
      console.log('not valid')
    }
  }
}
