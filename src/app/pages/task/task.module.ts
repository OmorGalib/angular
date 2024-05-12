import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    TaskComponent,
    PortfolioComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
