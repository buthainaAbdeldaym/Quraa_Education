import { Component } from '@angular/core';

@Component({
  selector: 'app-unit-one-lessons',
  templateUrl: './unit-one-lessons.component.html',
  styleUrls: ['./unit-one-lessons.component.css']
})
export class UnitOneLessonsComponent {
  // unites:string[]=['الوحده الاولى','الوحده الثانيه','الوحده الثالثه','الوحده الرابعه'];
  lessons:string[]=['الدرس الاول','الدرس الثانى','الدرس الثالث','الدرس الرابع'];
  LessonsLink:string[]=['/fourth-grade/first-term/arabic-language/arabic-content/unit-one/lesson-one'];
}
