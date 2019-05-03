import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

interface IPlayer {
  firstName: string;
  lastName: string;
  image: string;
  age: number;
  club: string;
  position: string;
}

@Component({
  selector: 'app-spieler',
  templateUrl: './spieler.component.html',
  styleUrls: ['./spieler.component.scss']
})
export class SpielerComponent implements OnInit {

  @ViewChild('owlElement') owlElement: OwlCarousel;

  public sliderOptions = {
    autoplay: true,
    dots: false,
    nav: false,
    loop: true,
    navigation: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      960: {
        items: 4
      },
      1200: {
        items: 6
      }
    }
  };

  public wtbPlayers: IPlayer[] = [
    {
      firstName: 'Andreas',
      lastName: 'Wagner',
      image: '/assets/images/spieler/sfw/andi.jpg',
      age: 26,
      club: 'SV Baltersweiler',
      position: '-'
    },
    {
      firstName: 'Annika',
      lastName: 'Müller',
      image: '/assets/images/spieler/sfw/annika.jpg',
      age: 28,
      club: 'SF Winterbach',
      position: 'Zentrales defensives Mittelfeld'
    },
    {
      firstName: 'Carsten',
      lastName: 'Rauber',
      image: '/assets/images/spieler/sfw/carsten.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Christian',
      lastName: 'Gelzleichter',
      image: '/assets/images/spieler/sfw/gelzi.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: 'Rechter Flügel'
    },
    {
      firstName: 'Christian',
      lastName: 'Spengler',
      image: '/assets/images/spieler/sfw/chris.jpg',
      age: 31,
      club: 'SF Winterbach',
      position: 'Zentrales defensives Mittelfeld'
    },
    {
      firstName: 'Dillon',
      lastName: 'Schug',
      image: '/assets/images/spieler/sfw/dillon.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Julian',
      lastName: 'Baier',
      image: '/assets/images/spieler/sfw/baier.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: 'Innenverteidiger / Rechter Verteidiger'
    },
    {
      firstName: 'Julian',
      lastName: 'Hoffmann',
      image: '/assets/images/spieler/sfw/julian.jpg',
      age: 17,
      club: 'JFG Marpingen',
      position: 'Torwart'
    },
    {
      firstName: 'Kevin',
      lastName: 'Spengler',
      image: '/assets/images/spieler/sfw/kevin.jpg',
      age: 23,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Lukas',
      lastName: 'Krämer',
      image: '/assets/images/spieler/sfw/lukas.jpg',
      age: 23,
      club: 'SF Winterbach',
      position: 'Linker Verteidiger'
    },
    {
      firstName: 'Manuel',
      lastName: 'Hahn',
      image: '/assets/images/spieler/sfw/manu.jpg',
      age: 23,
      club: 'SF Winterbach',
      position: 'Rechter Verteidiger'
    },
    {
      firstName: 'Max',
      lastName: 'Hoffmann',
      image: '/assets/images/spieler/sfw/max.jpg',
      age: 17,
      club: 'JFG Marpingen',
      position: 'Zentrales offensives Mittelfeld'
    },
    {
      firstName: 'Niclas',
      lastName: 'Hanke',
      image: '/assets/images/spieler/sfw/niclas.jpg',
      age: 23,
      club: 'vereinslos',
      position: 'Zentrales offensives Mittelfeld'
    },
    {
      firstName: 'Ronny',
      lastName: 'Hassel',
      image: '/assets/images/spieler/sfw/ronny.jpg',
      age: 37,
      club: 'SF Winterbach',
      position: 'Innenverteidiger'
    },
    {
      firstName: 'Simon',
      lastName: 'Backes',
      image: '/assets/images/spieler/sfw/simon.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: 'Rechter Verteidiger'
    },
    {
      firstName: 'Thomas',
      lastName: 'Weber',
      image: '/assets/images/spieler/sfw/thomas.jpg',
      age: 28,
      club: 'Fortuna Niederaltdorf',
      position: 'Rechter Verteidiger'
    },
    {
      firstName: 'Tobias',
      lastName: 'Jennewein',
      image: '/assets/images/spieler/sfw/tobi.jpg',
      age: 0,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Jannik',
      lastName: 'Nüsslein',
      image: '/assets/images/spieler/sfw/jannik.jpg',
      age: 27,
      club: 'SF Winterbach',
      position: 'Innenverteidiger'
    }
  ];

  public tgifecPlayers: IPlayer[] = [
    {
      firstName: 'Sven',
      lastName: 'Rothmeier',
      image: '',
      age: 38,
      club: '',
      position: ''
    }, {
      firstName: 'Benjamin',
      lastName: 'Gruner',
      image: '',
      age: 33,
      club: '',
      position: ''
    }, {
      firstName: 'Kevin',
      lastName: 'Eicher',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: 'Erik',
      lastName: 'Börgers',
      image: '',
      age: 28,
      club: '',
      position: ''
    }, {
      firstName: 'Mike',
      lastName: 'Karll',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: 'Thore',
      lastName: 'Marhöfer',
      image: '',
      age: 29,
      club: '',
      position: ''
    }, {
      firstName: 'Benjamin',
      lastName: 'Janek',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: 'Lasse',
      lastName: 'Thomas',
      image: '',
      age: 24,
      club: '',
      position: ''
    }, {
      firstName: 'Tobias',
      lastName: 'Utzig',
      image: '',
      age: 27,
      club: '',
      position: ''
    }, {
      firstName: 'Manuel',
      lastName: 'Schütt',
      image: '',
      age: 32,
      club: '',
      position: ''
    }, {
      firstName: 'Andre',
      lastName: 'Busch',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: 'Julien',
      lastName: 'Lehmann',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: 'Dirk',
      lastName: 'Stiwitz',
      image: '',
      age: 48,
      club: '',
      position: ''
    }, {
      firstName: 'Corey',
      lastName: 'Caperton',
      image: '',
      age: 30,
      club: '',
      position: ''
    }, {
      firstName: 'Nico',
      lastName: 'Deckarm',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: 'Thorsten',
      lastName: 'Hilse',
      image: '',
      age: 32,
      club: '',
      position: ''
    }, {
      firstName: 'Waldemar',
      lastName: 'Röhrich',
      image: '',
      age: 27,
      club: '',
      position: ''
    }, {
      firstName: 'Tobias',
      lastName: 'Schuler',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: 'Timo',
      lastName: 'Harth',
      image: '',
      age: 30,
      club: '',
      position: ''
    }, {
      firstName: 'Martin',
      lastName: 'Zürker',
      image: '',
      age: 21,
      club: '',
      position: ''
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
