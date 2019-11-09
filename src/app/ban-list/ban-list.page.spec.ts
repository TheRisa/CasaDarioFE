import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanListPage } from './ban-list.page';

describe('BanListPage', () => {
  let component: BanListPage;
  let fixture: ComponentFixture<BanListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
