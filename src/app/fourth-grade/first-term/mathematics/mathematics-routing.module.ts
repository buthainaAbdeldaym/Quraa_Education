import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathematicsContentComponent } from './mathematics-content/mathematics-content.component';
import { MathematicsUnitsComponent } from './mathematics-content/mathematics-units/mathematics-units.component';

const routes: Routes = [
  {path:'mathematics-content',component:MathematicsContentComponent,children:[
    {path:'Mathematics-units',component:MathematicsUnitsComponent},
    {path:'unite-one',loadChildren: () => import('./mathematics-content/unit-one/unit-one.module').then(m => m.UnitOneModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematicsRoutingModule { }
