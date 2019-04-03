import { NgModule } from '@angular/core';
import { EventSozialesProjektComponent } from './event/event-soziales-projekt/event-soziales-projekt.component';
import { SpielKartenansichtComponent } from './spiel/spiel-kartenansicht/spiel-kartenansicht.component';
import { SpielVorstellungComponent } from './spiel/spiel-vorstellung/spiel-vorstellung.component';
import { SponsorenAnsprechpartnerComponent } from './sponsoren/sponsoren-ansprechpartner/sponsoren-ansprechpartner.component';
import { SponsorenKontaktFormularComponent } from './sponsoren-kontakt-formular/sponsoren-kontakt-formular.component';
import { SponsorenListeComponent } from './sponsoren/sponsoren-liste/sponsoren-liste.component';
import { SponsorenPreiseComponent } from './sponsoren/sponsoren-preise/sponsoren-preise.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MyScrollServiceService } from '@shared/services/my-scroll-service.service';
import { TranslatesService } from '@shared/translates';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    EventSozialesProjektComponent,
    SpielKartenansichtComponent,
    SpielVorstellungComponent,
    SponsorenAnsprechpartnerComponent,
    SponsorenKontaktFormularComponent,
    SponsorenListeComponent,
    SponsorenPreiseComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyApjtaFJJyp7UBipZ8Iks8fXRvNvt8uuto'}),
    AgmSnazzyInfoWindowModule,
    RouterModule,
    CommonModule,
    NgPipesModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    EventSozialesProjektComponent,
    NgPipesModule,
    SpielKartenansichtComponent,
    SpielVorstellungComponent,
    SponsorenAnsprechpartnerComponent,
    SponsorenKontaktFormularComponent,
    SponsorenListeComponent,
    SponsorenPreiseComponent,
    TranslateModule
  ],
  providers: [
    MyScrollServiceService
  ]
})
export class SharedComponentsModule { }
