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
      age: 21,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Annika',
      lastName: 'Müller',
      image: '/assets/images/spieler/sfw/annika.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: ''
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
      position: ''
    },
    {
      firstName: 'Christian',
      lastName: 'Spengler',
      image: '/assets/images/spieler/sfw/chris.jpg',
      age: 0,
      club: 'SF Winterbach',
      position: ''
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
      position: ''
    },
    {
      firstName: 'Julian',
      lastName: 'Hoffmann',
      image: '/assets/images/spieler/sfw/julian.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: ''
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
      position: ''
    },
    {
      firstName: 'Manuel',
      lastName: 'Hahn',
      image: '/assets/images/spieler/sfw/manu.jpg',
      age: 23,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Max',
      lastName: 'Hoffmann',
      image: '/assets/images/spieler/sfw/max.jpg',
      age: 23,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Niclas',
      lastName: 'Hanke',
      image: '/assets/images/spieler/sfw/niclas.jpg',
      age: 23,
      club: '',
      position: ''
    },
    {
      firstName: 'Ronny',
      lastName: 'Hassel',
      image: '/assets/images/spieler/sfw/ronny.jpg',
      age: 36,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Simon',
      lastName: 'Backes',
      image: '/assets/images/spieler/sfw/simon.jpg',
      age: 21,
      club: 'SF Winterbach',
      position: ''
    },
    {
      firstName: 'Thomas',
      lastName: 'Weber',
      image: '/assets/images/spieler/sfw/thomas.jpg',
      age: 0,
      club: 'SF Winterbach',
      position: ''
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
      position: ''
    }
  ];

  public tgifecPlayers: IPlayer[] = [
    {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
      image: '',
      age: 21,
      club: '',
      position: ''
    }, {
      firstName: '',
      lastName: '',
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
