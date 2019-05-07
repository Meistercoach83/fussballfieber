import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

interface IPlayer {
  firstName: string;
  lastName: string;
  image: string;
  age: number;
  club: string;
  position: string;
  number?: number;
}

@Component({
  selector: 'app-spieler',
  templateUrl: './spieler.component.html',
  styleUrls: ['./spieler.component.scss']
})
export class SpielerComponent implements OnInit {

  public wtbPlayers: IPlayer[] = [
    {
      firstName: 'Maurice',
      lastName: 'Flickinger',
      image: '', // /assets/images/spieler/sfw/maurice.jpg
      age: 25,
      club: '?',
      position: '?',
      number: 13
    },
    {
      firstName: 'Annika',
      lastName: 'Müller',
      image: '/assets/images/spieler/sfw/annika.jpg',
      age: 28,
      club: 'SF Winterbach',
      position: 'Zentrales defensives Mittelfeld',
      number: 18
    },
    {
      firstName: 'Carsten',
      lastName: 'Rauber',
      image: '/assets/images/spieler/sfw/carsten.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: '',
      number: 12
    },
    {
      firstName: 'Christian',
      lastName: 'Gelzleichter',
      image: '/assets/images/spieler/sfw/gelzi.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: 'Rechter Flügel',
      number: 15
    },
    {
      firstName: 'Christian',
      lastName: 'Spengler',
      image: '/assets/images/spieler/sfw/chris.jpg',
      age: 31,
      club: 'SF Winterbach',
      position: 'Zentrales defensives Mittelfeld',
      number: 7
    },
    {
      firstName: 'Dillon',
      lastName: 'Schug',
      image: '/assets/images/spieler/sfw/dillon.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: '',
      number: 11
    },
    {
      firstName: 'Julian',
      lastName: 'Baier',
      image: '/assets/images/spieler/sfw/baier.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: 'Innenverteidiger / Rechter Verteidiger',
      number: 5
    },
    {
      firstName: 'Julian',
      lastName: 'Hoffmann',
      image: '/assets/images/spieler/sfw/julian.jpg',
      age: 17,
      club: 'JFG Marpingen',
      position: 'Torwart',
      number: 1
    },
    {
      firstName: 'Kevin',
      lastName: 'Spengler',
      image: '/assets/images/spieler/sfw/kevin.jpg',
      age: 23,
      club: 'SF Winterbach',
      position: '',
      number: 17
    },
    {
      firstName: 'Lukas',
      lastName: 'Krämer',
      image: '/assets/images/spieler/sfw/lukas.jpg',
      age: 23,
      club: 'SF Winterbach',
      position: 'Linker Verteidiger',
      number: 10
    },
    {
      firstName: 'Manuel',
      lastName: 'Hahn',
      image: '/assets/images/spieler/sfw/manu.jpg',
      age: 23,
      club: 'SF Winterbach',
      position: 'Rechter Verteidiger',
      number: 2
    },
    {
      firstName: 'Max',
      lastName: 'Hoffmann',
      image: '/assets/images/spieler/sfw/max.jpg',
      age: 17,
      club: 'JFG Marpingen',
      position: 'Zentrales offensives Mittelfeld',
      number: 9
    },
    {
      firstName: 'Niclas',
      lastName: 'Hanke',
      image: '/assets/images/spieler/sfw/niclas.jpg',
      age: 23,
      club: 'vereinslos',
      position: 'Zentrales offensives Mittelfeld',
      number: 8
    },
    {
      firstName: 'Ronny',
      lastName: 'Hassel',
      image: '/assets/images/spieler/sfw/ronny.jpg',
      age: 37,
      club: 'SF Winterbach',
      position: 'Innenverteidiger',
      number: 6
    },
    {
      firstName: 'Simon',
      lastName: 'Backes',
      image: '/assets/images/spieler/sfw/simon.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: 'Rechter Verteidiger',
      number: 4
    },
    {
      firstName: 'Thomas',
      lastName: 'Weber',
      image: '/assets/images/spieler/sfw/thomas.jpg',
      age: 28,
      club: 'Fortuna Niederaltdorf',
      position: 'Rechter Verteidiger',
      number: 3
    },
    {
      firstName: 'Tobias',
      lastName: 'Jennewein',
      image: '/assets/images/spieler/sfw/tobi.jpg',
      age: 22,
      club: 'SF Winterbach',
      position: '',
      number: 14
    },
    {
      firstName: 'Jannik',
      lastName: 'Nüsslein',
      image: '/assets/images/spieler/sfw/jannik.jpg',
      age: 27,
      club: 'SF Winterbach',
      position: 'Innenverteidiger',
      number: 16
    }
  ];

  public tgifecPlayers: IPlayer[] = [
    {
      firstName: 'Sven',
      lastName: 'Rothmeier',
      image: '/assets/images/spieler/tgifec/sven.jpg',
      age: 38,
      club: 'RW Pirmasens',
      position: 'TW',
      number: 1
    }, {
      firstName: 'Benjamin',
      lastName: 'Gruner',
      image: '/assets/images/spieler/tgifec/benjamin_gruner.jpg',
      age: 33,
      club: 'FV Kusel',
      position: 'LV/LM',
      number: 2
    }, {
      firstName: 'Kevin',
      lastName: 'Eicher',
      image: '/assets/images/spieler/tgifec/kevin.jpg',
      age: 30,
      club: 'VfL Wallhalben',
      position: 'IV/RV',
      number: 3
    }, {
      firstName: 'Erik',
      lastName: 'Börgers',
      image: '/assets/images/spieler/tgifec/erik.jpg',
      age: 28,
      club: 'SV Haldern',
      position: 'RV/RM',
      number: 4
    }, {
      firstName: 'Mike',
      lastName: 'Karll',
      image: '/assets/images/spieler/tgifec/mike.jpg',
      age: 34,
      club: 'VfL Wallhalben',
      position: 'IV/RV/LV',
      number: 5
    }, {
      firstName: 'Thore',
      lastName: 'Marhöfer',
      image: '/assets/images/spieler/tgifec/thore.jpg',
      age: 29,
      club: 'VfL Wallhalben',
      position: 'IV/DM',
      number: 6
    }, {
      firstName: 'Benjamin',
      lastName: 'Janek',
      image: '/assets/images/spieler/tgifec/benjamin_janek.jpg',
      age: 26,
      club: 'FV Kindsbach',
      position: 'ZM/RA',
      number: 7
    }, {
      firstName: 'Lasse',
      lastName: 'Thomas',
      image: '/assets/images/spieler/tgifec/lasse.jpg',
      age: 24,
      club: 'SV Kirchheim',
      position: 'RA/LA/OM/MS',
      number: 8
    }, {
      firstName: 'Tobias',
      lastName: 'Utzig',
      image: '/assets/images/spieler/tgifec/tobias_utzig.jpg',
      age: 27,
      club: 'VfL Wallhalben',
      position: 'DM/ZM/OM',
      number: 9
    }, {
      firstName: 'Manuel',
      lastName: 'Schütt',
      image: '/assets/images/spieler/tgifec/manuel.jpg',
      age: 32,
      club: 'VfL Wallhalben',
      position: 'TW/ZM',
      number: 10
    }, {
      firstName: 'Andre',
      lastName: 'Busch',
      image: '/assets/images/spieler/tgifec/andre.jpg',
      age: 32,
      club: 'FC Mittelbrunn',
      position: 'TW/ZM',
      number: 11
    }, {
      firstName: 'Julien',
      lastName: 'Lehmann',
      image: '/assets/images/spieler/tgifec/julien.jpg',
      age: 27,
      club: 'VfL Wallhalben',
      position: 'LA/RA/ZM',
      number: 12
    }, {
      firstName: 'Dirk',
      lastName: 'Stiwitz',
      image: '/assets/images/spieler/tgifec/dirk.jpg',
      age: 48,
      club: 'VfL Wallhalben',
      position: 'DM/RV',
      number: 13
    }, {
      firstName: 'Corey',
      lastName: 'Caperton',
      image: '/assets/images/spieler/tgifec/corey.jpg',
      age: 30,
      club: 'VfL Wallhalben',
      position: 'RA/MS',
      number: 14
    }, {
      firstName: 'Nico',
      lastName: 'Deckarm',
      image: '/assets/images/spieler/tgifec/nico.jpg',
      age: 19,
      club: 'SV Rohrbach',
      position: 'ZM',
      number: 15
    }, {
      firstName: 'Thorsten',
      lastName: 'Hilse',
      image: '/assets/images/spieler/tgifec/thorsten.jpg',
      age: 32,
      club: 'VfL Wallhalben',
      position: 'DM/ZM',
      number: 16
    }, {
      firstName: 'Waldemar',
      lastName: 'Röhrich',
      image: '/assets/images/spieler/tgifec/waldemar.jpg',
      age: 27,
      club: 'VfL Wallhalben',
      position: 'RA/LA/MS',
      number: 17
    }, {
      firstName: 'Tobias',
      lastName: 'Schuler',
      image: '/assets/images/spieler/tgifec/tobias_schuler.jpg',
      age: 22,
      club: 'FV Kindsbach',
      position: 'ZM/OM',
      number: 18
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
