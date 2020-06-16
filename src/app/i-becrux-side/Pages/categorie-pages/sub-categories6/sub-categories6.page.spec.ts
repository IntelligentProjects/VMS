import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategories6Page } from './sub-categories6.page';

describe('SubCategories6Page', () => {
  let component: SubCategories6Page;
  let fixture: ComponentFixture<SubCategories6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCategories6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategories6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
