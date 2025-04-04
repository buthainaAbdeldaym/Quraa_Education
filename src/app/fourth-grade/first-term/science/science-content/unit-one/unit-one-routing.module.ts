import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitOneLessonsComponent } from './unit-one-lessons/unit-one-lessons.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';

const routes: Routes = [
  {path:'unit-one-lessons',component:UnitOneLessonsComponent},
  {path:'lesson-one',component:LessonOneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitOneRoutingModule { }
