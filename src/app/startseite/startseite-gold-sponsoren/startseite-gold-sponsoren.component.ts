import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite-gold-sponsoren',
  templateUrl: './startseite-gold-sponsoren.component.html',
  styleUrls: ['./startseite-gold-sponsoren.component.scss']
})
export class StartseiteGoldSponsorenComponent implements OnInit {

  public currentSponsor = 1;

  constructor() {
  }

  ngOnInit() {
  }

  setCurrentSponsor(id: number) {
    this.currentSponsor = id;
  }

}
