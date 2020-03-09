import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule, CookieService } from 'ngx-cookie';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { SharedModule } from './shared/shared.module';
import { TranslatesService } from './shared/translates';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { UniversalStorage } from './shared/storage/universal.storage';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

export function initLanguage(translateService: TranslatesService): Function {
  return (): Promise<any> => translateService.initLanguage();
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'fussballfieber'}),
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule,
    AppRoutes,
    BrowserAnimationsModule,
    CookieModule.forRoot(),
    SharedModule.forRoot(),
    GalleryModule,
    LightboxModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
  ],
  declarations: [AppComponent],
  providers: [
    CookieService,
    UniversalStorage,
    {provide: APP_INITIALIZER, useFactory: initLanguage, multi: true, deps: [TranslatesService]},
  ],
})
export class AppModule {
}
