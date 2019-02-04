import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-index',
  templateUrl: './media-index.component.html',
  styleUrls: ['./media-index.component.scss']
})
export class MediaIndexComponent implements OnInit {

  public galleries: {
    title: string;
    id: number;
    files: {
      thumb: string;
      src: string;
      title: string;
      type: string;
    }[]
  }[] = [
    {
      title: 'Medienberichte vergangener Versuche',
      id: 1,
      files: [
        {
          thumb: 'assets/images/galery/1/antenne-niedersachsen-min.jpg',
          src: 'assets/images/galery/1/full/antenne-niedersachsen.jpg',
          title: 'Antenne Niedersachsen',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/ard-min.jpg',
          src: 'assets/images/galery/1/full/ard.jpg',
          title: 'ARD',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/berliner-kurier-min.jpg',
          src: 'assets/images/galery/1/full/berliner-kurier.jpg',
          title: 'Berliner Kurier',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/bild-min.jpg',
          src: 'assets/images/galery/1/full/bild.jpg',
          title: 'Bild',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/die-welt-min.jpg',
          src: 'assets/images/galery/1/full/die-welt.jpg',
          title: 'Die Welt',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/eurosport-min.jpg',
          src: 'assets/images/galery/1/full/eurosport.jpg',
          title: 'Eurosport',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/ev-zeitung-min.jpg',
          src: 'assets/images/galery/1/full/ev-zeitung.jpg',
          title: 'Evangelische Zeitung',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/frankfurter-rundschau-min.jpg',
          src: 'assets/images/galery/1/full/frankfurter-rundschau.jpg',
          title: 'Frankfurter Rundschau',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/fussball-min.jpg',
          src: 'assets/images/galery/1/full/fussball.jpg',
          title: 'fussball.de',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/fussi-freunde-min.jpg',
          src: 'assets/images/galery/1/full/fussi-freunde.jpg',
          title: 'Fussi-Freunde',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/gazetta-min.jpg',
          src: 'assets/images/galery/1/full/gazetta.jpg',
          title: 'Gazetta dello Sport',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/hamburg1-min.jpg',
          src: 'assets/images/galery/1/full/hamburg1.jpg',
          title: 'Hamburg1',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/hamburger-abendblatt-min.jpg',
          src: 'assets/images/galery/1/full/hamburger-abendblatt.jpg',
          title: 'Hamburger Abendblatt',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/hamburger-morgenpost-min.jpg',
          src: 'assets/images/galery/1/full/hamburger-morgenpost.jpg',
          title: 'Hamburger Morgenpost',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/handelsblatt-min.jpg',
          src: 'assets/images/galery/1/full/handelsblatt.jpg',
          title: 'Handelsblatt',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/hln-min.jpg',
          src: 'assets/images/galery/1/full/hln.jpg',
          title: 'Hln.be',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/koelner-stadtanzeiger-min.jpg',
          src: 'assets/images/galery/1/full/koelner-stadtanzeiger.jpg',
          title: 'Kölner Stadtanzeiger',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/laola.tv-min.jpg',
          src: 'assets/images/galery/1/full/laola.tv.jpg',
          title: 'Laola.tv',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/le-matin-min.jpg',
          src: 'assets/images/galery/1/full/le-matin.jpg',
          title: 'Le Matin',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/merkur-min.jpg',
          src: 'assets/images/galery/1/full/merkur.jpg',
          title: 'Merkur',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/n24-min.jpg',
          src: 'assets/images/galery/1/full/n24.jpg',
          title: 'n24',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/ndr-min.jpg',
          src: 'assets/images/galery/1/full/ndr.jpg',
          title: 'NDR',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/new-york-times-min.jpg',
          src: 'assets/images/galery/1/full/new-york-times.jpg',
          title: 'new-york-times',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/nordschleswiger-min.jpg',
          src: 'assets/images/galery/1/full/nordschleswiger.jpg',
          title: 'Nordschleswiger',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/oema-min.jpg',
          src: 'assets/images/galery/1/full/oema.jpg',
          title: 'Oema.gr',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/radio-hamburg-min.jpg',
          src: 'assets/images/galery/1/full/radio-hamburg.jpg',
          title: 'Radio Hamburg',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/ran-de-min.jpg',
          src: 'assets/images/galery/1/full/ran-de.jpg',
          title: 'Ran.de',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/rheinpfalz-min.jpg',
          src: 'assets/images/galery/1/full/rheinpfalz.jpg',
          title: 'Rheinpfalz',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/rheinpfalz2-min.jpg',
          src: 'assets/images/galery/1/full/rheinpfalz2.jpg',
          title: 'Rheinpfalz (2)',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/salzburger-nachrichten-min.jpg',
          src: 'assets/images/galery/1/full/salzburger-nachrichten.jpg',
          title: 'Salzburger Nachrichten',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/sat1-min.jpg',
          src: 'assets/images/galery/1/full/sat1.jpg',
          title: 'Sat1',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/shz-min.jpg',
          src: 'assets/images/galery/1/full/shz.jpg',
          title: 'SHZ',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/sky-austria-min.jpg',
          src: 'assets/images/galery/1/full/sky-austria.jpg',
          title: 'Sky',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/sofoot-min.jpg',
          src: 'assets/images/galery/1/full/sofoot.jpg',
          title: 'SoFoot.com',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/spiegel-min.jpg',
          src: 'assets/images/galery/1/full/spiegel.jpg',
          title: 'Spiegel',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/sport1-min.jpg',
          src: 'assets/images/galery/1/full/sport1.jpg',
          title: 'Sport1',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/sport-buzzer-min.jpg',
          src: 'assets/images/galery/1/full/sport-buzzer.jpg',
          title: 'Sport Buzzer',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/sport-net-min.jpg',
          src: 'assets/images/galery/1/full/sport-net.jpg',
          title: 'Sport.net',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/swr-min.jpg',
          src: 'assets/images/galery/1/full/swr.jpg',
          title: 'SWR',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/taz-min.jpg',
          src: 'assets/images/galery/1/full/taz.jpg',
          title: 'TAZ',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/t-online-min.jpg',
          src: 'assets/images/galery/1/full/t-online.jpg',
          title: 'T-Online',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/vereins-leben-min.jpg',
          src: 'assets/images/galery/1/full/vereins-leben.jpg',
          title: 'Vereins-Leben',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/yahoo-min.jpg',
          src: 'assets/images/galery/1/full/yahoo.jpg',
          title: 'Yahoo',
          type: 'image'
        },
        {
          thumb: 'assets/images/galery/1/zdf-min.jpg',
          src: 'assets/images/galery/1/full/zdf.jpg',
          title: 'ZDF',
          type: 'image'
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
