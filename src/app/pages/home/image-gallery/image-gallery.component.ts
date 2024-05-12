import { Component } from '@angular/core';
import { images_db } from 'src/app/core/header/db/products.db';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent {
  images: any[] = images_db;
}
