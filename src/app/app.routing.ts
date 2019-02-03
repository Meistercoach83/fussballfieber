import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';
// import { WrapperComponent } from '@shared/layouts/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: './shared/layouts/layouts.module#LayoutsModule',
    // component: WrapperComponent,
    canActivateChild: [MetaGuard]
    /* children: [
      {
        path: 'startseite',
        loadChildren: './startseite/startseite.module#StartseiteModule'
      },
      {
        path: '**',
        loadChildren: './not-found/not-found.module#NotFoundModule'
      },*/
  }
  /* { path: '',
    redirectTo: 'startseite',
    pathMatch: 'full'
  } */
];

export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
