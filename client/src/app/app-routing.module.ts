import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// Contains a list of stringified navigational paths of the application.
import { NavigationPathsEnum } from './shared/enums/shared-enum.enum';

const appRoutes: Routes = [
  {
    path: '',
    // Lazy loading the `PublicModule`.
    loadChildren: () => import('./web/public/public.module').then(m => m.PublicModule)
  }, {
    // Redirecting to the path `eahelp` on invalid URL access.
    path: '**',
    redirectTo: NavigationPathsEnum.EAHELP
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // For debugging purposes only.
        preloadingStrategy: PreloadAllModules,
        // useHash: true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
