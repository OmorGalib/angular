import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { QuoteSectionComponent } from './quote-section/quote-section.component';
import { QuerySectionComponent } from './query-section/query-section.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { AboutUsComponent } from './about-us.component';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';
import { FormContactSectionComponent } from './form-contact-section/form-contact-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AboutUsComponent,
    HeroSectionComponent,
    QuoteSectionComponent,
    QuerySectionComponent,
    InfoSectionComponent,
    FormContactSectionComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    FooterModule,
    NavbarModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AboutUsModule {}
