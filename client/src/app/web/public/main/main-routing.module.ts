import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Contains a list of stringified navigational paths of the application.
import { NavigationPathsEnum } from '../../../shared/enums/shared-enum.enum';

import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  // Redirecting to `eahelp` in either case of empty path or `eahelp`.
  {
    path: '',
    pathMatch: 'full',
    redirectTo: NavigationPathsEnum.EAHELP
  }, {
    path: NavigationPathsEnum.EAHELP,
    component: MainComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }
