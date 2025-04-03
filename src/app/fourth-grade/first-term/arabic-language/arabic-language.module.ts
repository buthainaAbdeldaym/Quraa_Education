import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArabicLanguageRoutingModule } from './arabic-language-routing.module';
import { ArabicContentComponent } from './arabic-content/arabic-content.component';
import { ArabicUnitsComponent } from './arabic-content/arabic-units/arabic-units.component';


@NgModule({
  declarations: [
    ArabicContentComponent,
    ArabicUnitsComponent
  ],
  imports: [
    CommonModule,
    ArabicLanguageRoutingModule
  ]
})
export class ArabicLanguageModule { }
