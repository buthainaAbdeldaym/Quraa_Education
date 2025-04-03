import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitOneRoutingModule } from './unit-one-routing.module';
import { UnitOneLessonsComponent } from './unit-one-lessons/unit-one-lessons.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';


@NgModule({
  declarations: [
    UnitOneLessonsComponent,
    LessonOneComponent
  ],
  imports: [
    CommonModule,
    UnitOneRoutingModule
  ]
})
export class UnitOneModule { }
