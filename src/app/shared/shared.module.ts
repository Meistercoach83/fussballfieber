import { ModuleWithProviders, NgModule } from '@angular/core';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  exports: [
    SharedComponentsModule,
    LayoutsModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
