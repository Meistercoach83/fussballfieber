import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsoren-liste',
  templateUrl: './sponsoren-liste.component.html',
  styleUrls: ['./sponsoren-liste.component.scss']
})
export class SponsorenListeComponent implements OnInit {

  public packages: string[] = [
    'Platin',
    'Gold',
    'Silver',
    'Bronze',
    'Hours'
  ];

  public sponsors: { title: string, imageUrl: string, url?: string, type: string }[] = [
    {
      title: 'Coiffeur-Team Lieb',
      imageUrl: '/assets/images/sponsoren/lieb.png',
      url: 'http://www.coiffeurteam-lieb.de',
      type: 'Bronze'
    },
    {
      title: 'Radio Schlagerparadies',
      imageUrl: '/assets/images/sponsoren/radioschlagerparadies.png',
      url: 'https://www.schlagerparadies.de',
      type: 'Silver'
    },
    {
      title: 'Praxis für Ergotherapie Nadine Stiwitz',
      imageUrl: '/assets/images/sponsoren/ergotherapie-nadine-stiwitz.jpg',
      url: 'http://www.ergo-wallhalben.de',
      type: 'Hours'
    },
    {
      title: 'Brennerei Michel',
      imageUrl: '/assets/images/sponsoren/Brennerei-Michel.jpg',
      url: 'http://www.brennerteam.de',
      type: 'Hours'
    },
    {
      title: 'Braufabrik.de',
      imageUrl: '/assets/images/sponsoren/braufabrik.jpg',
      url: 'http://www.braufabrik.de',
      type: 'Hours'
    },
    {
      title: 'Elektrobau Marpingen',
      imageUrl: '/assets/images/sponsoren/ebm.jpg',
      url: 'https://www.elektrobau-marpingen.de',
      type: 'Hours'
    },
    {
      title: 'Schröder Fleischwaren',
      imageUrl: '/assets/images/sponsoren/Schroeder.png',
      url: 'http://www.schroeder-fleischwaren.de',
      type: 'Gold'
    },
    {
      title: 'Imperial Sportsbet',
      imageUrl: '/assets/images/sponsoren/Imperial_Logo_Web_S.png',
      url: 'https://imperial-sportsbet.com',
      type: 'Gold'
    },
    {
      title: 'Baugruppe Gross',
      imageUrl: '/assets/images/sponsoren/PG_Logo.png',
      url: 'https://gross-bau.de',
      type: 'Gold'
    },
    {
      title: 'Bosch Car Service + Reisemobile Dörr',
      imageUrl: '/assets/images/sponsoren/Doerr.png',
      url: 'http://reisemobile-doerr.de',
      type: 'Gold'
    },
    {
      title: 'Volkswagen Autohaus Schmidt',
      imageUrl: '/assets/images/sponsoren/Schmidt_GmbH_Logo.png',
      url: 'https://www.autohaus-schmidt-wnd.de',
      type: 'Platin'
    },
    {
      title: 'Volkswagen',
      imageUrl: '/assets/images/sponsoren/volkswagen-logo.png',
      url: 'https://www.volkswagen.de',
      type: 'Platin'
    },
    {
      title: 'Treuhand Saar',
      imageUrl: '/assets/images/sponsoren/THS.jpg',
      url: 'https://www.treuhand-saar.de',
      type: 'Gold'
    },
    {
      title: 'Axis Communications AB',
      imageUrl: '/assets/images/sponsoren/axis_logo_color.jpg',
      url: 'https://www.axis.com',
      type: 'Gold'
    },
    {
      title: 'Bechtle GmbH',
      imageUrl: '/assets/images/sponsoren/bechtle_logo_rgb.png',
      url: 'https://www.bechtle.com',
      type: 'Gold'
    },
    {
      title: 'Unsere Volksbank EG St. Wendeler Land',
      imageUrl: '/assets/images/sponsoren/SWV_Logo_RGB.png',
      url: 'https://www.unserevolksbank.de',
      type: 'Silver'
    },
    {
      title: 'PROWIN',
      imageUrl: '/assets/images/sponsoren/prowin.png',
      url: 'https://www.prowin.net',
      type: 'Bronze'
    },
    {
      title: 'Württembergische - Generalagentur Woll & Contier-Woll',
      imageUrl: '/assets/images/sponsoren/wurttembergische.jpg',
      url: 'https://www.wuerttembergische.de/versicherungen/david.woll',
      type: 'Bronze'
    },
    {
      title: 'ELEMENTS Badausstellung',
      imageUrl: '/assets/images/sponsoren/elements-logo-Schwarz_HOCHFORMAT.jpg',
      url: 'https://www.elements-show.de',
      type: 'Bronze'
    },
    {
      title: 'OrgaSoft Kommunal',
      imageUrl: '/assets/images/sponsoren/osklogo_ohne_2.jpg',
      url: 'http://o-s-k.de',
      type: 'Bronze'
    },
    {
      title: 'REWE - Dein Markt',
      imageUrl: '/assets/images/sponsoren/thumbs/rewe.png',
      url: 'https://www.rewe.de',
      type: 'Bronze'
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
