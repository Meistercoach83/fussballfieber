import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {

  public partners: { title: string, imageUrl: string, url?: string, type: string }[] = [
    {
      title: 'DFB & fussball.de',
      imageUrl: '/assets/images/sponsoren/dfb-fussballde.jpg',
      url: 'http://www.fussball.de',
      type: 'Partner'
    },
    {
      title: 'Stefan Morsch Stiftung',
      imageUrl: '/assets/images/projekte/stefan-morsch-stiftung.png',
      url: 'https://www.stefan-morsch-stiftung.com',
      type: 'Partner'
    },
    {
      title: 'Deutsche Kinderkrebsstiftung',
      imageUrl: '/assets/images/projekte/kinderkrebsstiftung.png',
      url: 'https://www.kinderkrebsstiftung.de',
      type: 'Partner'
    },
    {
      title: 'Hochwald',
      imageUrl: '/assets/images/sponsoren/Hochwald-Logo.png',
      url: 'https://www.hochwald-sprudel.de',
      type: 'Partner'
    },
    {
      title: 'Hoffmann Getränke',
      imageUrl: '/assets/images/sponsoren/1782_Logo.png',
      type: 'Partner'
    },
    {
      title: 'S & L',
      imageUrl: '/assets/images/sponsoren/SUL_Logo_ZW.jpg',
      url: 'https://www.sul.de',
      type: 'Partner'
    },
    {
      title: 'Sporthaus Glaab',
      imageUrl: '/assets/images/sponsoren/glaab.png',
      url: 'http://sporthaus-glaab.de/',
      type: 'Partner'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
