import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartseiteGoldSponsorenComponent } from './startseite-gold-sponsoren.component';

describe('StartseiteGoldSponsorenComponent', () => {
  let component: StartseiteGoldSponsorenComponent;
  let fixture: ComponentFixture<StartseiteGoldSponsorenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartseiteGoldSponsorenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartseiteGoldSponsorenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
