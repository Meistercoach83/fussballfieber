import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'fussballfieber' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    GalleryModule,
    LightboxModule,
    TransferHttpCacheModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
