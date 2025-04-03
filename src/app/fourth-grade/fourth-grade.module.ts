import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourthGradeRoutingModule } from './fourth-grade-routing.module';
import { FirstTermComponent } from './first-term/first-term.component';
import { HeaderComponent } from './first-term/header/header.component';
import { FirstTermSubjectsComponent } from './first-term/first-term-subjects/first-term-subjects.component';


@NgModule({
  declarations: [
    FirstTermComponent,
    HeaderComponent,
    FirstTermSubjectsComponent
  ],
  imports: [
    CommonModule,
    FourthGradeRoutingModule
  ]
})
export class FourthGradeModule { }
