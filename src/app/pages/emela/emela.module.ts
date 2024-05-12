import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ],
})
export class EmelaModule {}
