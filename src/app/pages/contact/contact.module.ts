import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SheetDataComponent } from './sheet-data/sheet-data.component';


@NgModule({
  declarations: [
    ContactComponent,
    SheetDataComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
