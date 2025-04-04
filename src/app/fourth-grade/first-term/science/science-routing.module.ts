import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScienceContentComponent } from './science-content/science-content.component';
import { ScienceUnitsComponent } from './science-content/science-units/science-units.component';

const routes: Routes = [
  {path:'science-content',component:ScienceContentComponent,children:[
    {path:'science-units',component:ScienceUnitsComponent},
    {path:'unit-one',loadChildren: () => import('./science-content/unit-one/unit-one.module').then(m => m.UnitOneModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScienceRoutingModule { }
