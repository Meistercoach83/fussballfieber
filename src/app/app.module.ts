import { isPlatformBrowser } from '@angular/common';
import { NgModule, Inject, APP_ID, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'fussballfieber' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    GalleryModule,
    LightboxModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
