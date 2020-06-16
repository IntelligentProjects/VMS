import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategories5Page } from './sub-categories5.page';

describe('SubCategories5Page', () => {
  let component: SubCategories5Page;
  let fixture: ComponentFixture<SubCategories5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategories5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategories5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
