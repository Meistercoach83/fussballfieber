import { Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

export const layoutsRoutes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'startseite',
        loadChildren: () => import('../../startseite/startseite.module').then(m => m.StartseiteModule)
      },
      {
        path: 'event',
        loadChildren: () => import('../../event/event.module').then(m => m.EventModule)
      },
      {
        path: 'media',
        loadChildren: () => import('../../media/media.module').then(m => m.MediaModule)
      },
      {
        path: 'spiel',
        loadChildren: () => import('../../spiel/spiel.module').then(m => m.SpielModule)
      },
      {
        path: 'sponsoren',
        loadChildren: () => import('../../sponsoren/sponsoren.module').then(m => m.SponsorenModule)
      },
      {
        path: '**',
        redirectTo: 'startseite'
      }
    ]
  }
];
