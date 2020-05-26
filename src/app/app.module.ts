import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'fussballfieber' }),
    RouterModule,
    AppRoutes,
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
}
