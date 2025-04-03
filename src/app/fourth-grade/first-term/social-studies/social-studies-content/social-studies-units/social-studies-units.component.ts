import { Component } from '@angular/core';

@Component({
  selector: 'app-social-studies-units',
  templateUrl: './social-studies-units.component.html',
  styleUrls: ['./social-studies-units.component.css']
})
export class SocialStudiesUnitsComponent {
  unites:string[]=['الوحده الاولى','الوحده الثانيه','الوحده الثالثه','الوحده الرابعه'];
  unitOneLessonsLink:string[]=['/fourth-grade/first-term/social-studies/social-studies-content/unite-one/unit-one-lessons'];
}
