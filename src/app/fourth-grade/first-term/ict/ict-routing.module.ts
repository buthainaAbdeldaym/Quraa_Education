import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IctContentComponent } from './ict-content/ict-content.component';
import { IctUnitsComponent } from './ict-content/ict-units/ict-units.component';

const routes: Routes = [
  {path:'ict-content',component:IctContentComponent,children:[
    {path:'ict-units',component:IctUnitsComponent},
    {path:'unit-one',loadChildren: () => import('./ict-content/unit-one/unit-one.module').then(m => m.UnitOneModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IctRoutingModule { }
