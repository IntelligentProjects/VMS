import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingOriPage } from './setting-ori.page';

describe('SettingOriPage', () => {
  let component: SettingOriPage;
  let fixture: ComponentFixture<SettingOriPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingOriPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingOriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
