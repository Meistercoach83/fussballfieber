import { Routes } from '@angular/router';
import { StartseiteIndexComponent } from './startseite-index/startseite-index.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const startseiteRoutes: Routes = [
  {
    path: '',
    component: StartseiteIndexComponent,
    data: {
      meta: {
        title: 'startseite.title',
        description: 'startseite.description',
        override: true
      }
    }
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent,
    data: {
      meta: {
        title: 'datenschutz.title',
        description: 'datenschutz.description',
        override: true
      }
    }
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
    data: {
      meta: {
        title: 'impressum.title',
        description: 'impressum.description',
        override: true
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
