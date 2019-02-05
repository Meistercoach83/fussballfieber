import { Component } from '@angular/core';

import { MetaService } from '@ngx-meta/core';
import { TranslatesService } from '@shared/translates';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  private title = 'Fussballfieber | Der Weltrekord';
  private description = 'Fussballfieber 2019 - Der Weltrekordversuch von Winterbach';

  constructor(private readonly meta: MetaService, translatesService: TranslatesService) {
    this.meta.setTitle(this.title, true);

    this.meta.setTag('description', this.description);
    this.meta.setTag('application-name', this.description);
    this.meta.setTag('apple-mobile-web-app-title', this.description);
    this.meta.setTag('content-language', translatesService.getCurrentLang());
    this.meta.setTag('og:title', this.title);
    this.meta.setTag('site_name', 'fussballfieber2019.de');
    this.meta.setTag('og:description', this.description);
    this.meta.setTag('og:url', 'https://fussballfieber2019.de');
    this.meta.setTag('og:type', 'website');

    this.meta.setTag('twitter:description', this.description);
    this.meta.setTag('twitter:card', 'summary_large_image');
    this.meta.setTag('twitter:creator', '@Fussball2019');
    this.meta.setTag('twitter:title', 'Fussballfieber 2019');

  }
}
