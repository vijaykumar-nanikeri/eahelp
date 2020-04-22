import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    // Lazy loading the `MainModule`.
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
