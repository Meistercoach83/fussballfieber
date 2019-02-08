import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartseiteNewsComponent } from './startseite-news.component';

describe('StartseiteNewsComponent', () => {
  let component: StartseiteNewsComponent;
  let fixture: ComponentFixture<StartseiteNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartseiteNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartseiteNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
