import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemePage } from './color-theme.page';

describe('ColorThemePage', () => {
  let component: ColorThemePage;
  let fixture: ComponentFixture<ColorThemePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorThemePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorThemePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
