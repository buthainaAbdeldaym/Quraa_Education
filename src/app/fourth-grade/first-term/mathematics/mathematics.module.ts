import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathematicsRoutingModule } from './mathematics-routing.module';
import { MathematicsContentComponent } from './mathematics-content/mathematics-content.component';
import { MathematicsUnitsComponent } from './mathematics-content/mathematics-units/mathematics-units.component';


@NgModule({
  declarations: [
    MathematicsContentComponent,
    MathematicsUnitsComponent
  ],
  imports: [
    CommonModule,
    MathematicsRoutingModule
  ]
})
export class MathematicsModule { }
