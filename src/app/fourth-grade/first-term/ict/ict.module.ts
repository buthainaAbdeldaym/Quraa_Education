import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IctRoutingModule } from './ict-routing.module';
import { IctContentComponent } from './ict-content/ict-content.component';
import { IctUnitsComponent } from './ict-content/ict-units/ict-units.component';


@NgModule({
  declarations: [
    IctContentComponent,
    IctUnitsComponent
  ],
  imports: [
    CommonModule,
    IctRoutingModule
  ]
})
export class IctModule { }
