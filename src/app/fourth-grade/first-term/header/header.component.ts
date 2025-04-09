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

      if (this.currentUrl.includes('social-studies-content')) {
        if(!this.sections.includes('الدراسات الاجتماعيه')){
          this.sections.push('الدراسات الاجتماعيه');
        }
      }
      else if (!this.currentUrl.includes('social-studies-content') && this.currentUrl.includes('first-term-subjects')) {
        if(this.sections.includes('الدراسات الاجتماعيه')){
          let section=this.sections.indexOf('الدراسات الاجتماعيه')
          this.sections.splice(section,1);
        }
      }

      if (this.currentUrl.includes('mathematics-content')) {
        if(!this.sections.includes('الرياضيات')){
          this.sections.push('الرياضيات');
        }
      }
      else if (!this.currentUrl.includes('mathematics-content') && this.currentUrl.includes('first-term-subjects')) {
        if(this.sections.includes('الرياضيات')){
          let section=this.sections.indexOf('الرياضيات')
          this.sections.splice(section,1);
        }
      }

      if (this.currentUrl.includes('science-content')) {
        if(!this.sections.includes('العلوم')){
          this.sections.push('العلوم');
        }
      }
      else if (!this.currentUrl.includes('science-content') && this.currentUrl.includes('first-term-subjects')) {
        if(this.sections.includes('العلوم')){
          let section=this.sections.indexOf('العلوم')
          this.sections.splice(section,1);
        }
      }


      if (this.currentUrl.includes('islamic-studies-content')) {
        if(!this.sections.includes('التربية الدينية الاسلامية')){
          this.sections.push('التربية الدينية الاسلامية');
        }
      }
      else if (!this.currentUrl.includes('islamic-studies-content') && this.currentUrl.includes('first-term-subjects')) {
        if(this.sections.includes('التربية الدينية الاسلامية')){
          let section=this.sections.indexOf('التربية الدينية الاسلامية')
          this.sections.splice(section,1);
        }
      }


      if (this.currentUrl.includes('ict-content')) {
        if(!this.sections.includes('الكمبيوتر وتكنولوجيا المعلومات')){
          this.sections.push('الكمبيوتر وتكنولوجيا المعلومات');
        }
      }
      else if (!this.currentUrl.includes('ict-content') && this.currentUrl.includes('first-term-subjects')) {
        if(this.sections.includes('الكمبيوتر وتكنولوجيا المعلومات')){
          let section=this.sections.indexOf('الكمبيوتر وتكنولوجيا المعلومات')
          this.sections.splice(section,1);
        }
      }


      if (this.currentUrl.includes('unit-one')&&this.currentUrl.includes('lesson-one')) {
        if (!this.sections.includes('الدرس الاول فى الوحده الاولى')) {
          this.sections.push('الدرس الاول فى الوحده الاولى');
        }
      }
      else if(this.currentUrl.includes('unit-one')&&!this.currentUrl.includes('lesson-one')){

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

        if (this.currentUrl.includes('social-studies-content')) {
          if(!this.sections.includes('الدراسات الاجتماعيه')){
            this.sections.push('الدراسات الاجتماعيه');
          }
        }
        else if (!this.currentUrl.includes('social-studies-content') && this.currentUrl.includes('first-term-subjects')) {
          if(this.sections.includes('الدراسات الاجتماعيه')){
            let section=this.sections.indexOf('الدراسات الاجتماعيه')
            this.sections.splice(section,1);
          }
        }

        if (this.currentUrl.includes('mathematics-content')) {
          if(!this.sections.includes('الرياضيات')){
            this.sections.push('الرياضيات');
          }
        }
        else if (!this.currentUrl.includes('mathematics-content') && this.currentUrl.includes('first-term-subjects')) {
          if(this.sections.includes('الرياضيات')){
            let section=this.sections.indexOf('الرياضيات')
            this.sections.splice(section,1);
          }
        }

        if (this.currentUrl.includes('science-content')) {
          if(!this.sections.includes('العلوم')){
            this.sections.push('العلوم');
          }
        }
        else if (!this.currentUrl.includes('science-content') && this.currentUrl.includes('first-term-subjects')) {
          if(this.sections.includes('العلوم')){
            let section=this.sections.indexOf('العلوم')
            this.sections.splice(section,1);
          }
        }

        if (this.currentUrl.includes('islamic-studies-content')) {
          if(!this.sections.includes('التربية الدينية الاسلامية')){
            this.sections.push('التربية الدينية الاسلامية');
          }
        }
        else if (!this.currentUrl.includes('islamic-studies-content') && this.currentUrl.includes('first-term-subjects')) {
          if(this.sections.includes('التربية الدينية الاسلامية')){
            let section=this.sections.indexOf('التربية الدينية الاسلامية')
            this.sections.splice(section,1);
          }
        }

        if (this.currentUrl.includes('ict-content')) {
          if(!this.sections.includes('الكمبيوتر وتكنولوجيا المعلومات')){
            this.sections.push('الكمبيوتر وتكنولوجيا المعلومات');
          }
        }
        else if (!this.currentUrl.includes('ict-content') && this.currentUrl.includes('first-term-subjects')) {
          if(this.sections.includes('الكمبيوتر وتكنولوجيا المعلومات')){
            let section=this.sections.indexOf('الكمبيوتر وتكنولوجيا المعلومات')
            this.sections.splice(section,1);
          }
        }


        if (this.currentUrl.includes('unit-one')&&this.currentUrl.includes('lesson-one')) {
          if (!this.sections.includes('الدرس الاول فى الوحده الاولى')) {
            this.sections.push('الدرس الاول فى الوحده الاولى');
          }
        }
        else if(this.currentUrl.includes('unit-one')&&!this.currentUrl.includes('lesson-one')){

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
