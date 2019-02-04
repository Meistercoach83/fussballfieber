import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: './shared/layouts/layouts.module#LayoutsModule',
    canActivateChild: [MetaGuard]
  }
];

export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
