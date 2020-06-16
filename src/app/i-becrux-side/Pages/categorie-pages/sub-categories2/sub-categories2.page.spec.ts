import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategories2Page } from './sub-categories2.page';

describe('SubCategories2Page', () => {
  let component: SubCategories2Page;
  let fixture: ComponentFixture<SubCategories2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategories2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategories2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
