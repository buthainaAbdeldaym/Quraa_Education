import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  currentUrl!: string[];
  sections:string[]=['الصف الرابع الابتدائى','الترم الاول'];
  pathes!:string[];
  subscription!: any;
  constructor(private __Router:Router){}
  ngOnInit(): void {
    this.currentUrl = this.__Router.url.split('/').slice(1);

    if (this.currentUrl.length>3) {
      if (this.currentUrl.includes('arabic-content')) {
        if(!this.sections.includes('اللغه العربيه')){
          this.sections.push('اللغه العربيه');
        }
      }
      else if (!this.currentUrl.includes('arabic-content') && this.currentUrl.includes('first-term-subjects')) {
        if(this.sections.includes('اللغه العربيه')){
          let section=this.sections.indexOf('اللغه العربيه')
          this.sections.splice(section,1);
        }
      }
      if (this.currentUrl.includes('unite-one')&&this.currentUrl.includes('lesson-one')) {
        if (!this.sections.includes('الدرس الاول فى الوحده الاولى')) {
          this.sections.push('الدرس الاول فى الوحده الاولى');
        }
      }
      else if(this.currentUrl.includes('unite-one')&&!this.currentUrl.includes('lesson-one')){

        if (this.sections.includes('الدرس الاول فى الوحده الاولى')) {
          let section=this.sections.indexOf('الدرس الاول فى الوحده الاولى')
          this.sections.splice(section,1);
        }
      }
    }

    this.subscription = this.__Router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects.split('/').slice(1);
        if (this.currentUrl.includes('arabic-content')&&!this.currentUrl.includes('unite-one')) {
          if(!this.sections.includes('اللغه العربيه')){
            this.sections.push('اللغه العربيه');
          }
        }
        else if (!this.currentUrl.includes('arabic-content') && this.currentUrl.includes('first-term-subjects')) {
          if(this.sections.includes('اللغه العربيه')){
            let section=this.sections.indexOf('اللغه العربيه')
            this.sections.splice(section,1);
          }
        }
        if (this.currentUrl.includes('unite-one')&&this.currentUrl.includes('lesson-one')) {
          if (!this.sections.includes('الدرس الاول فى الوحده الاولى')) {
            this.sections.push('الدرس الاول فى الوحده الاولى');
          }
        }
        else if(this.currentUrl.includes('unite-one')&&!this.currentUrl.includes('lesson-one')){

          if (this.sections.includes('الدرس الاول فى الوحده الاولى')) {
            let section=this.sections.indexOf('الدرس الاول فى الوحده الاولى')
            this.sections.splice(section,1);
          }
        }

      }
    });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
