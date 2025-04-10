import { Component } from '@angular/core';

@Component({
  selector: 'app-arabic-units',
  templateUrl: './arabic-units.component.html',
  styleUrls: ['./arabic-units.component.css']
})
export class ArabicUnitsComponent {
  unites:string[]=['الوحده الاولى','الوحده الثانيه','الوحده الثالثه','الوحده الرابعه'];
  unitOneLessonsLink:string[]=['/fourth-grade/first-term/arabic-language/arabic-content/unit-one/unit-one-lessons'];
}
