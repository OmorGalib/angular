import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { HeroWallSectionComponent } from './hero-wall-section/hero-wall-section.component';
import { LocationsComponent } from './locations/locations.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { NavbarModule } from 'src/app/shared/components/navbar/navbar.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeroSectionComponent,
    CardSectionComponent,
    HeroWallSectionComponent,
    LocationsComponent,
    ImageGalleryComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CardModule,
    FooterModule,
    NavbarModule,
  ],
})
export class HomeModule {}
