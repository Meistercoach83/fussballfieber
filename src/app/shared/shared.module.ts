import { ModuleWithProviders, NgModule } from '@angular/core';
import { TransferHttpModule } from '@gorniv/ngx-transfer-http';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { EmailService } from './services/email.service';

@NgModule({
  exports: [
    SharedComponentsModule,
    LayoutsModule
    // TransferHttpModule,
  ],
  providers: [
    EmailService
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
