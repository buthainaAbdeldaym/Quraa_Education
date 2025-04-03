import { Component } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  grades:string[]=['الصف الرابع الابتدائى','الصف الخامس الابتدائى','الصف السادس الابتدائى'
    ,'الصف الاول الاعدادى','الصف الثانى الاعدادى','الصف الثالث الاعدادى'
    ,'الصف الاول الثانوى','الصف الثانى الثانوى','الصف الثالث الثانوى'
  ]
  links:string[]=['/fourth-grade/first-term/first-term-subjects']
}
