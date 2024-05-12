import { Component } from '@angular/core';
import { locations_db } from 'src/app/core/header/db/products.db';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {
  places:any []= locations_db;
}
