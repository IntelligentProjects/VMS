import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentHeaderTextPage } from './segment-tabs.page';

describe('SegmentHeaderTextPage', () => {
  let component: SegmentHeaderTextPage;
  let fixture: ComponentFixture<SegmentHeaderTextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentHeaderTextPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentHeaderTextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
