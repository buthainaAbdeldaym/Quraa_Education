import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialStudiesContentComponent } from './social-studies-content/social-studies-content.component';
import { SocialStudiesUnitsComponent } from './social-studies-content/social-studies-units/social-studies-units.component';

const routes: Routes = [
  {path:'social-studies-content',component:SocialStudiesContentComponent,children:[
      {path:'social-studies-units',component:SocialStudiesUnitsComponent},
      {path:'unit-one',loadChildren: () => import('./social-studies-content/unit-one/unit-one.module').then(m => m.UnitOneModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialStudiesRoutingModule { }
