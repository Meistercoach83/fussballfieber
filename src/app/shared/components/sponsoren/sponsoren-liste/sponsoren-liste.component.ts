import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsoren-liste',
  templateUrl: './sponsoren-liste.component.html',
  styleUrls: ['./sponsoren-liste.component.scss']
})
export class SponsorenListeComponent implements OnInit {

  public sponsors: { title: string, imageUrl: string, url?: string }[] = [
    {
      title: 'Coiffeur-Team Lieb',
      imageUrl: '/assets/images/sponsoren/lieb.png',
      url: 'http://www.coiffeurteam-lieb.de'
    },
    {
      title: 'Radio Schlagerparadies',
      imageUrl: '/assets/images/sponsoren/radioschlagerparadies.png',
      url: 'https://www.schlagerparadies.de'
    },
    {
      title: 'Praxis für Ergotherapie Nadine Stiwitz',
      imageUrl: '/assets/images/sponsoren/ergotherapie-nadine-stiwitz.jpg',
      url: 'http://www.ergo-wallhalben.de'
    },
    {
      title: 'Brennerei Michel',
      imageUrl: '/assets/images/sponsoren/Brennerei-Michel.jpg',
      url: 'http://www.brennerteam.de'
    },
    {
      title: 'DFB / Fussball.de',
      imageUrl: '/assets/images/sponsoren/dfb-fussballde.jpg',
      url: 'http://www.fussball.de'
    },
    {
      title: 'Schröder Fleischwaren',
      imageUrl: '/assets/images/sponsoren/Schroeder.png',
      url: 'http://www.schroeder-fleischwaren.de'
    },
    {
      title: 'Baugruppe Gross',
      imageUrl: '/assets/images/sponsoren/PG_Logo.png',
      url: 'https://gross-bau.de'
    },
    {
      title: 'Bosch Car Service + Reisemobile Dörr',
      imageUrl: '/assets/images/sponsoren/Doerr.png',
      url: 'http://reisemobile-doerr.de/'
    },
    {
      title: 'Volkswagen Autohaus Schmidt',
      imageUrl: '/assets/images/sponsoren/Schmidt_GmbH_Logo.png',
      url: 'http://reisemobile-doerr.de/'
    },
    {
      title: 'Treuhand Saar',
      imageUrl: '/assets/images/sponsoren/THS.gif',
      url: 'https://www.treuhand-saar.de'
    },
    {
      title: 'Unsere Volksbank EG St. Wendeler Land',
      imageUrl: '/assets/images/sponsoren/volksbank.jpg',
      url: 'https://www.unserevolksbank.de'
    },
    {
      title: 'PROWIN',
      imageUrl: '/assets/images/sponsoren/prowin.png',
      url: 'https://www.prowin.net'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
