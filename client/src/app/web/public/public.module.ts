import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicComponent } from './public.component';

import { HeaderComponent } from './header/header.component';

// The routing module is recommended to be imported after all components get imported.
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
