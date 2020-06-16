import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategories4Page } from './sub-categories4.page';

describe('SubCategories4Page', () => {
  let component: SubCategories4Page;
  let fixture: ComponentFixture<SubCategories4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategories4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategories4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
