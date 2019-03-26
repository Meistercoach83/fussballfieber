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
      title: 'Treuhand Saar',
      image: '/assets/images/sponsoren/thumbs/THS.gif',
      url: 'https://www.treuhand-saar.de'
    }
  ];

  constructor(public myScrollService: MyScrollServiceService) {
  }

  ngOnInit() {
  }

}
