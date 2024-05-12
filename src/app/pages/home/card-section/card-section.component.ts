import { Component, Input } from '@angular/core';
import { products_db } from 'src/app/core/header/db/products.db';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent {
  products: any []= products_db;
  //passedName!: string ;
  totalPrice: number = 0;

  onClickPassed(event: any){
    console.log('passed event data: ', event)
    //this.passedName = event.name;
    const price = parseFloat(event.nPrice.replace('$', ''));
    this.totalPrice += price;
  }
}
