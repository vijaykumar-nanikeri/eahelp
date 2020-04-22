import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * A package of the list of frequently importable modules.
 * Importing this here avoids importing such modules in multiple modules.
 */
import { CoreModule } from '../../../shared/core/core.module';

import { MainComponent } from './main.component';

import { GamesComponent } from './games/games.component';
import { PlatformsDirective } from './games/directives/platforms.directive';

import { PlatformsComponent } from './games/platforms/platforms.component';
import { TopicsDirective } from './games/platforms/directives/topics.directive';

import { TopicsComponent } from './games/platforms/topics/topics.component';
import { EmailDirective } from './games/platforms/topics/directives/email.directive';

import { EmailComponent } from './games/platforms/topics/email/email.component';

// The routing module is recommended to be imported after all components get imported.
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    GamesComponent,
    PlatformsDirective,
    PlatformsComponent,
    TopicsDirective,
    TopicsComponent,
    EmailDirective,
    EmailComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MainRoutingModule
  ]
})
export class MainModule { }
