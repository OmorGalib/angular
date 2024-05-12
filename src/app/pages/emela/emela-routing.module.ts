import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmelaComponent } from './emela.component';

const routes: Routes = [
  {
    path:"",
    component: EmelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmelaRoutingModule { }
