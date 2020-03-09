import { NgModule } from '@angular/core';
import { EventSozialesProjektComponent } from './event/event-soziales-projekt/event-soziales-projekt.component';
import { SpielKartenansichtComponent } from './spiel/spiel-kartenansicht/spiel-kartenansicht.component';
import { SpielVorstellungComponent } from './spiel/spiel-vorstellung/spiel-vorstellung.component';
import { SponsorenAnsprechpartnerComponent } from './sponsoren/sponsoren-ansprechpartner/sponsoren-ansprechpartner.component';
import { SponsorenKontaktFormularComponent } from './sponsoren-kontakt-formular/sponsoren-kontakt-formular.component';
import { SponsorenListeComponent } from './sponsoren/sponsoren-liste/sponsoren-liste.component';
import { SponsorenPreiseComponent } from './sponsoren/sponsoren-preise/sponsoren-preise.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MyScrollServiceService } from '../../shared/services/my-scroll-service.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    EventSozialesProjektComponent,
    SpielVorstellungComponent,
    SponsorenAnsprechpartnerComponent,
    SponsorenKontaktFormularComponent,
    SponsorenListeComponent,
    SponsorenPreiseComponent,
    SpielKartenansichtComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    NgPipesModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    EventSozialesProjektComponent,
    NgPipesModule,
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
