import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:"",
    component:PagesComponent,
    children:[
       {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
       },
       {
        path:"home",
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
       },
       {
        path:"contact",
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
       },
       {
        path:"aboutUs",
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
       },
       {
        path:"login",
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
       },
       {
        path:"emela",
        loadChildren: () => import('./pages/emela/emela.module').then(m => m.EmelaModule)
       },
       {
        path:"task",
        loadChildren: () => import('./pages/task/task.module').then(m => m.TaskModule)
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
