import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArabicContentComponent } from './arabic-content/arabic-content.component';
import { ArabicUnitsComponent } from './arabic-content/arabic-units/arabic-units.component';

const routes: Routes = [
  {path:'arabic-content',component:ArabicContentComponent,children:[
    {path:'arabic-units',component:ArabicUnitsComponent},
    {path:'unite-one',loadChildren: () => import('./arabic-content/unit-one/unit-one.module').then(m => m.UnitOneModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArabicLanguageRoutingModule { }
