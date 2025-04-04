import { Component } from '@angular/core';

@Component({
  selector: 'app-science-units',
  templateUrl: './science-units.component.html',
  styleUrls: ['./science-units.component.css']
})
export class ScienceUnitsComponent {
  unites:string[]=['الوحده الاولى','الوحده الثانيه','الوحده الثالثه','الوحده الرابعه'];
  unitOneLessonsLink:string[]=['/fourth-grade/first-term/science/science-content/unit-one/unit-one-lessons'];
}
