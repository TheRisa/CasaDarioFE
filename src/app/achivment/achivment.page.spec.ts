import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivmentPage } from './achivment.page';

describe('AchivmentPage', () => {
  let component: AchivmentPage;
  let fixture: ComponentFixture<AchivmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchivmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchivmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
