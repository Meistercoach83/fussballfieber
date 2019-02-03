import { Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

export const layoutsRoutes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'startseite',
        loadChildren: '../../startseite/startseite.module#StartseiteModule'
      },
      {
        path: 'event',
        loadChildren: '../../event/event.module#EventModule'
      },
      {
        path: 'media',
        loadChildren: '../../media/media.module#MediaModule'
      },
      {
        path: 'spiel',
        loadChildren: '../../spiel/spiel.module#SpielModule'
      },
      {
        path: 'sponsoren',
        loadChildren: '../../sponsoren/sponsoren.module#SponsorenModule'
      },

      {
        path: 'ansprechpartner',
        loadChildren: '../../ansprechpartner/ansprechpartner.module#AnsprechpartnerModule'
      },
      {
        path: '**',
        redirectTo: 'startseite'
      }
    ]
  }
];
