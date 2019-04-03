import { Component, Input, OnInit } from '@angular/core';
import { MyScrollServiceService } from '@shared/services/my-scroll-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() isHomePage = false;

  sponsors = [
    {
      title: 'Volkswagen Autohaus Schmidt',
      image: '/assets/images/sponsoren/thumbs/Schmidt_GmbH_Logo.png',
      url: 'https://www.autohaus-schmidt-wnd.de'
    },
    {
      title: 'Bosch Car Service + Reisemobile Dörr',
      image: '/assets/images/sponsoren/thumbs/Logo_Reisemobile_Doerr_Blau.jpg',
      url: 'http://reisemobile-doerr.de'
    },
    {
      title: 'Peter Groß Bau',
      image: '/assets/images/sponsoren/thumbs/PG_Logo_rgb_weiss-02.png',
      url: 'https://gross-bau.de'
    },
    {
      title: 'Bechtle GmbH',
      image: '/assets/images/sponsoren/thumbs/bechtle_logo_rgb.png',
      url: 'https://www.bechtle.com'
    },
    {
      title: 'Treuhand Saar',
      image: '/assets/images/sponsoren/thumbs/THS.gif',
      url: 'https://www.treuhand-saar.de'
    },
    {
      title: 'Schröder Fleischwaren',
      image: '/assets/images/sponsoren/thumbs/Schroeder.png',
      url: 'http://www.schroeder-fleischwaren.de'
    },
    {
      title: 'Volkswagen',
      image: '/assets/images/sponsoren/thumbs/volkswagen-logo.png',
      url: 'https://www.volkswagen.de'
    },
    {
      title: 'Axis Communications AB',
      image: '/assets/images/sponsoren/thumbs/axis_logo_color.jpg',
      url: 'https://www.axis.com'
    },
  ];

  constructor(public myScrollService: MyScrollServiceService) {
  }

  ngOnInit() {
  }

}
