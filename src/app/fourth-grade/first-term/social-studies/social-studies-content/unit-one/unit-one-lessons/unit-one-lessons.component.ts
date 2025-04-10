import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-one-lessons',
  templateUrl: './unit-one-lessons.component.html',
  styleUrls: ['./unit-one-lessons.component.css']
})
export class UnitOneLessonsComponent {
  lessons:string[]=['الدرس الاول','الدرس الثانى','الدرس الثالث','الدرس الرابع'];
  LessonsLink:string[]=['/fourth-grade/first-term/social-studies/social-studies-content/unit-one/lesson-one'];
}
