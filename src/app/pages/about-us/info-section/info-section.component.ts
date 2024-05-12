import { Component } from '@angular/core';
import { info_db } from 'src/app/core/header/db/aboutUs.db';

@Component({
  selector: 'app-info-section',
  templateUrl: './info-section.component.html',
  styleUrls: ['./info-section.component.scss']
})
export class InfoSectionComponent {
  informations:any []= info_db;
}
