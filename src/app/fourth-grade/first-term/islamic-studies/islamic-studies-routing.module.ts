import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IslamicStudiesContentComponent } from './islamic-studies-content/islamic-studies-content.component';
import { IslamicStudiesUnitsComponent } from './islamic-studies-content/islamic-studies-units/islamic-studies-units.component';

const routes: Routes = [
  {path:'islamic-studies-content',component:IslamicStudiesContentComponent,children:[
    {path:'islamic-studies-units',component:IslamicStudiesUnitsComponent},
    {path:'unit-one',loadChildren: () => import('./islamic-studies-content/unit-one/unit-one.module').then(m => m.UnitOneModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IslamicStudiesRoutingModule { }
