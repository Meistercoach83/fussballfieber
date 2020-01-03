import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shared/layouts/layouts.module').then(m => m.LayoutsModule),
    canActivateChild: [MetaGuard]
  }
];

export const AppRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabled' });
