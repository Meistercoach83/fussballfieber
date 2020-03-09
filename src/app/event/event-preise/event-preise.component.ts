import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-preise',
  templateUrl: './event-preise.component.html',
  styleUrls: ['./event-preise.component.scss']
})
export class EventPreiseComponent implements OnInit {

  public drinks: { title: string, price: string }[] = [
    {
      title: 'Cola, Limo, Sprudel, Apfelschorle',
      price: '1,50'
    },
    {
      title: 'IsoFit',
      price: '2,00'
    },
    {
      title: '(alkoholfreies) Bier und Radler, Mixery, Malzbier, Gründel´s Fresh',
      price: '2,00'
    },
    {
      title: 'Kaffee',
      price: '1,00'
    },
    {
      title: 'Weizenbier',
      price: '3,00'
    }
  ];

  public foods: { title: string, price: string }[] = [
    {
      title: 'Rostwurst mit halbem Weck',
      price: '2,20'
    },
    {
      title: 'Rostwurst mit ganzem Weck',
      price: '2,50'
    },
    {
      title: 'Currywurst',
      price: '3,00'
    },
    {
      title: 'Pommes Frites',
      price: '1,50'
    },
    {
      title: 'Currywurst mit Pommes Frites',
      price: '4,50'
    },
    {
      title: 'Schwenkbraten mit halbem Weck',
      price: '3,50'
    },
    {
      title: 'Saumagen mit halbem Weck',
      price: '2,00'
    }
  ];

  public specials: { title: string, day: string, price: string, type: string, sorting: number, cssClass: string }[] = [
    {
      title: 'Cocktailparty',
      day: 'Mittwoch, 29.05.19<br />20.00 - 02:00 Uhr',
      price: 'siehe Aushang',
      type: 'food',
      sorting: 0,
      cssClass: 'bg-food-'
    },
    {
      title: 'Rührei mit Speck',
      day: 'Montag, 03.06.19<br />07.00 - 10:00 Uhr',
      price: '3,50 €',
      type: 'food',
      sorting: 3,
      cssClass: 'bg-food-'
    },
    {
      title: 'Rigatoni mit Schinken-Sahne oder Bolognese-Sauce',
      day: 'Donnerstag, 30.05.19<br />ab 11:00 Uhr',
      price: '5,00 €',
      type: 'food',
      sorting: 1,
      cssClass: 'bg-food-'
    },
    {
      title: 'Verschiedene Sorten Flammkuchen',
      day: 'Donnerstag, 30.05.19<br />ab 11:00 Uhr',
      price: '5,00 €',
      type: 'food',
      sorting: 1,
      cssClass: 'bg-food-'
    },
    {
      title: 'Verschiedene Sorten Pizza',
      day: 'Donnerstag, 30.05.19<br />ab 11:00 Uhr',
      price: '5,50 €',
      type: 'food',
      sorting: 1,
      cssClass: 'bg-food-'
    },
    {
      title: 'Kuchen',
      day: 'Donnerstag, 30.05.19 <br /> Sonntag, 02.06.19<br />ab 14:30 Uhr',
      price: '1 € (trocken) <br />1,50 € (Torten)',
      type: 'food',
      sorting: 2,
      cssClass: 'bg-food-'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
