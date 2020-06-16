import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategories3Page } from './sub-categories3.page';

describe('SubCategories3Page', () => {
  let component: SubCategories3Page;
  let fixture: ComponentFixture<SubCategories3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategories3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategories3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
