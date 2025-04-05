import { Component } from '@angular/core';

@Component({
  selector: 'app-ict-units',
  templateUrl: './ict-units.component.html',
  styleUrls: ['./ict-units.component.css']
})
export class IctUnitsComponent {
  units:string[]=['الوحده الاولى','الوحده الثانيه','الوحده الثالثه','الوحده الرابعه'];
  unitOneLessonsLink:string[]=['/fourth-grade/first-term/ict/ict-content/unit-one/unit-one-lessons'];
}
