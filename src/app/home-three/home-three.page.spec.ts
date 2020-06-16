import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThreePage } from './home-three.page';

describe('HomeThreePage', () => {
  let component: HomeThreePage;
  let fixture: ComponentFixture<HomeThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeThreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
