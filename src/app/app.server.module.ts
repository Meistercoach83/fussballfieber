import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
