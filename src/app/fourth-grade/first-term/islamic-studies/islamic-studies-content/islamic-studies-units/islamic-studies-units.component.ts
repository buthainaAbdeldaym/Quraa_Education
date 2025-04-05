import { Component } from '@angular/core';

@Component({
  selector: 'app-islamic-studies-units',
  templateUrl: './islamic-studies-units.component.html',
  styleUrls: ['./islamic-studies-units.component.css']
})
export class IslamicStudiesUnitsComponent {
  units:string[]=['الوحده الاولى','الوحده الثانيه','الوحده الثالثه','الوحده الرابعه'];
  unitOneLessonsLink:string[]=['/fourth-grade/first-term/islamic-studies/islamic-studies-content/unit-one/unit-one-lessons'];
}
