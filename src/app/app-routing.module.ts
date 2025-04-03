import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent},
  {path:'home',component:MainLayoutComponent},
  {path:'fourth-grade',loadChildren: () => import('./fourth-grade/fourth-grade.module').then(m => m.FourthGradeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
