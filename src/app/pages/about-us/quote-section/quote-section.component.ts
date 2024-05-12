import { Component } from '@angular/core';
import { quote_db } from 'src/app/core/header/db/aboutUs.db';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.scss']
})
export class QuoteSectionComponent {
  quotetions: any []= quote_db;
}
