import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-term',
  templateUrl: './first-term.component.html',
  styleUrls: ['./first-term.component.css']
})
export class FirstTermComponent implements OnInit{
  constructor(private __ActivatedRoute:ActivatedRoute){}
  currentPath:string[]=[]
  ngOnInit(): void {
    // const currentPath = this.__ActivatedRoute.snapshot.url.map(segment => segment.path);
    // console.log(currentPath);
    // const segments = this.__ActivatedRoute.snapshot.url.map(seg => seg.path);
    // console.log(segments);

  }
  // subjects:string[]=['اللغة العربيه','اللغة الإنجليزية','الرياضيات','التربيه الإسلاميه'];
}
