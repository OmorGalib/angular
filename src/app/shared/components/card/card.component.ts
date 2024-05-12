import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cardData: any = null;
  @Output() passEventData = new EventEmitter();

  onClickStore(){
    console.log('Stored: ',this.cardData);
    this.passEventData.emit(this.cardData)
  }
}
