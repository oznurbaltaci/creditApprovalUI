import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoursePageComponent } from './views/recourse-page/recourse-page.component';


const routes: Routes = [
  {
    path: 'recourse',
    component: RecoursePageComponent
  },
  {
    path: '',
    redirectTo: 'recourse',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'recourse' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
