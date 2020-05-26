import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    InlineStyleModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent, InlineStyleComponent],
})
export class AppServerModule {
}
