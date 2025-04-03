import { Component } from '@angular/core';

@Component({
  selector: 'app-first-term-subjects',
  templateUrl: './first-term-subjects.component.html',
  styleUrls: ['./first-term-subjects.component.css']
})
export class FirstTermSubjectsComponent {
  subjects:string[]=['اللغة العربيه','الدرسات الاجتماعية','الرياضيات','التربية الدينية الاسلامية','العلوم','الكمبيوتر وتكنولوجيا المعلومات'];
  subjectLink:string[]=['/fourth-grade/first-term/arabic-language/arabic-content/arabic-units',
  '/fourth-grade/first-term/social-studies/social-studies-content/social-studies-units',
  '/fourth-grade/first-term/mathematics/mathematics-content/mathematics-units'
  ];
}
