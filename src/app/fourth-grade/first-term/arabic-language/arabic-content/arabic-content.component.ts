import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-arabic-content',
  templateUrl: './arabic-content.component.html',
  styleUrls: ['./arabic-content.component.css']
})
export class ArabicContentComponent implements OnInit{
  unites:string[]=['الوحده الاولى','الوحده الثانيه','الوحده الثالثه','الوحده الرابعه'];
  lessons:string[]=['الدرس الاول','الدرس الثانى','الدرس الثالث','الدرس الرابع']
  // lessons_unites:any=[
  //   ['الوحده الاولى',['الدرس الاول','الدرس الثانى','الدرس الثالث','الدرس الرابع']],
  //   ['الوحده الثانيه',['الدرس الاول','الدرس الثانى','الدرس الثالث','الدرس الرابع']],
  //   ['الوحده الثالثه',['الدرس الاول','الدرس الثانى','الدرس الثالث','الدرس الرابع']],
  //   ['الوحده الرابعه',['الدرس الاول','الدرس الثانى','الدرس الثالث','الدرس الرابع']]
  // ]
  ngOnInit(): void {

  }
}
