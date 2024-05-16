import { NgModule } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';

import { EmelaRoutingModule } from './emela-routing.module';
import { EmelaComponent } from './emela.component';
import { EmelaCardsComponent } from './emela-cards/emela-cards.component';
import { BusinessCardsComponent } from './business-cards/business-cards.component';
import { MaterialsComponent } from './materials/materials.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    EmelaComponent,
    EmelaCardsComponent,
    BusinessCardsComponent,
    MaterialsComponent,
  ],
  imports: [
    CommonModule,
    EmelaRoutingModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatStepperModule
  ],
})
export class EmelaModule {}
