import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialStudiesRoutingModule } from './social-studies-routing.module';
import { SocialStudiesContentComponent } from './social-studies-content/social-studies-content.component';
import { SocialStudiesUnitsComponent } from './social-studies-content/social-studies-units/social-studies-units.component';


@NgModule({
  declarations: [
    SocialStudiesContentComponent,
    SocialStudiesUnitsComponent
  ],
  imports: [
    CommonModule,
    SocialStudiesRoutingModule
  ]
})
export class SocialStudiesModule { }
