import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  constructor(
    private meta: Meta,
    private title: Title
  ) {
    this.title.setTitle('Fußballfieber 2019 - Der 168 Stunden Weltrekord');
  }
}
