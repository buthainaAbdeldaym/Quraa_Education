import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IslamicStudiesRoutingModule } from './islamic-studies-routing.module';
import { IslamicStudiesContentComponent } from './islamic-studies-content/islamic-studies-content.component';
import { IslamicStudiesUnitsComponent } from './islamic-studies-content/islamic-studies-units/islamic-studies-units.component';


@NgModule({
  declarations: [
    IslamicStudiesContentComponent,
    IslamicStudiesUnitsComponent
  ],
  imports: [
    CommonModule,
    IslamicStudiesRoutingModule
  ]
})
export class IslamicStudiesModule { }
