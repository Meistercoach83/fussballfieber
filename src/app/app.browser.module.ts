import { environment } from './../environments/server/environment';
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { InlineStyleComponent } from './inline-style/inline-style.component';

export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

@NgModule({
  bootstrap: [AppComponent, InlineStyleComponent],
  imports: [
    AppModule,
    BrowserTransferStateModule,
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
export class AppBrowserModule { }
