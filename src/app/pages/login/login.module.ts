import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NavbarModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LoginModule { }
