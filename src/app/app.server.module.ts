import { CookieBackendService, CookieService } from '@gorniv/ngx-universal';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    InlineStyleModule
  ],
  bootstrap: [AppComponent, InlineStyleComponent],
  providers: [
    { provide: CookieService, useClass: CookieBackendService }
  ]
})
export class AppServerModule {
}
