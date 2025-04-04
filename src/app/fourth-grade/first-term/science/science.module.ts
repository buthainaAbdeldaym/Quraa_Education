import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScienceRoutingModule } from './science-routing.module';
import { ScienceContentComponent } from './science-content/science-content.component';
import { ScienceUnitsComponent } from './science-content/science-units/science-units.component';


@NgModule({
  declarations: [
    ScienceContentComponent,
    ScienceUnitsComponent
  ],
  imports: [
    CommonModule,
    ScienceRoutingModule
  ]
})
export class ScienceModule { }
