import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookServicesPage } from './add-vehicles.page';

describe('FormRegisterThreePage', () => {
  let component: BookServicesPage;
  let fixture: ComponentFixture<BookServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookServicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
