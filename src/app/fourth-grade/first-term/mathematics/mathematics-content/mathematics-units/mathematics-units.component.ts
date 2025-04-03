import { Component } from '@angular/core';

@Component({
  selector: 'app-mathematics-units',
  templateUrl: './mathematics-units.component.html',
  styleUrls: ['./mathematics-units.component.css']
})
export class MathematicsUnitsComponent {
  unites:string[]=['الوحده الاولى','الوحده الثانيه','الوحده الثالثه','الوحده الرابعه'];
  unitOneLessonsLink:string[]=['/fourth-grade/first-term/mathematics/mathematics-content/unite-one/unit-one-lessons'];
}
