import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CountDownTimerComponent } from '@shared/layouts/count-down-timer/count-down-timer.component';
import { HeaderComponent } from '@shared/layouts/header/header.component';
import { MenuComponent } from '@shared/layouts/menu/menu.component';
import { LoadingIndicatorModule } from '@shared/components/loading-indicator/loading-indicator.module';
import { layoutsRoutes } from '@shared/layouts/layouts.routing';
import { MyScrollServiceService } from '@shared/services/my-scroll-service.service';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  imports: [
    CommonModule,
    LoadingIndicatorModule,
    RouterModule.forChild(layoutsRoutes),
    TranslateModule
  ],
  declarations: [
    CountDownTimerComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    WrapperComponent
  ],
  providers: [
    MyScrollServiceService,
    ScrollToService
  ]
})
export class LayoutsModule {
}
