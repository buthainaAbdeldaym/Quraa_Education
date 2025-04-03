import { Component } from '@angular/core';

@Component({
  selector: 'app-first-term-subjects',
  templateUrl: './first-term-subjects.component.html',
  styleUrls: ['./first-term-subjects.component.css']
})
export class FirstTermSubjectsComponent {
  subjects:string[]=['اللغة العربيه','الرياضيات','التربية الدينية الاسلامية','الدرسات الاجتماعية','العلوم','الكمبيوتر وتكنولوجيا المعلومات'];
  subjectLink:string[]=['/fourth-grade/first-term/arabic-language/arabic-content/arabic-units'];
}
