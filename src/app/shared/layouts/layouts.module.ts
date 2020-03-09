import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer/footer.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CountDownTimerComponent } from '../layouts/count-down-timer/count-down-timer.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { MenuComponent } from '../layouts/menu/menu.component';
import { LoadingIndicatorModule } from '../components/loading-indicator/loading-indicator.module';
import { layoutsRoutes } from '../layouts/layouts.routing';
import { MyScrollServiceService } from '../services/my-scroll-service.service';
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
