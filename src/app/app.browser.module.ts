import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TranslatesBrowserModule } from './shared/translates/translates-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { environment } from '../environments/browser/environment';

export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

@NgModule({
  bootstrap: [AppComponent, InlineStyleComponent],
  imports: [
    AppModule,
    BrowserTransferStateModule,
    TranslatesBrowserModule,
    InlineStyleModule,
    environment.production ? ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }) : []
  ],
  providers: [
    {
      provide: REQUEST,
      useFactory: getRequest,
    },
    { provide: 'ORIGIN_URL', useValue: location.origin },
  ],
})
export class AppBrowserModule {}
