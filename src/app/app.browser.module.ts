import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


@NgModule({
  imports: [
    AppModule,
    BrowserModule.withServerTransition({ appId: 'angular-starter' }),
    BrowserTransferStateModule,
    environment.production ? ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }) : []
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule { }
