import { Component, Input, OnInit } from '@angular/core';
import { MyScrollServiceService } from '../../services/my-scroll-service.service';

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
      image: '/assets/params/images/sponsoren/thumbs/Schmidt_GmbH_Logo.png',
      url: 'https://www.autohaus-schmidt-wnd.de'
    },
    {
      title: 'Bosch Car Service + Reisemobile Dörr',
      image: '/assets/params/images/sponsoren/thumbs/Logo_Reisemobile_Doerr_Blau.jpg',
      url: 'http://reisemobile-doerr.de'
    },
    {
      title: 'Peter Groß Bau',
      image: '/assets/params/images/sponsoren/thumbs/PG_Logo_rgb_weiss-02.png',
      url: 'https://gross-bau.de'
    },
    {
      title: 'Bechtle GmbH',
      image: '/assets/params/images/sponsoren/thumbs/bechtle_logo_rgb.png',
      url: 'https://www.bechtle.com'
    },
    {
      title: 'Treuhand Saar',
      image: '/assets/params/images/sponsoren/thumbs/THS.gif',
      url: 'https://www.treuhand-saar.de'
    },
    {
      title: 'Schröder Fleischwaren',
      image: '/assets/params/images/sponsoren/thumbs/Schroeder.png',
      url: 'http://www.schroeder-fleischwaren.de'
    },
    {
      title: 'Volkswagen',
      image: '/assets/params/images/sponsoren/thumbs/volkswagen-logo.png',
      url: 'https://www.volkswagen.de'
    },
    {
      title: 'Axis Communications AB',
      image: '/assets/params/images/sponsoren/thumbs/axis_logo_color.jpg',
      url: 'https://www.axis.com'
    },
    {
      title: 'Imperial Sportsbet',
      image: '/assets/params/images/sponsoren/thumbs/Imperial_Logo_Web_S.png',
      url: 'https://imperial-sportsbet.com'
    } /*,
    {
      title: 'Layenberger',
      image: '/assets/params/images/sponsoren/thumbs/layenberger_logo.png',
      url: 'https://www.layenberger.com'
    }, */
  ];

  constructor(public myScrollService: MyScrollServiceService) {
  }

  ngOnInit() {
  }

}
