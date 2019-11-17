import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskMePage } from './ask-me.page';

describe('AskMePage', () => {
  let component: AskMePage;
  let fixture: ComponentFixture<AskMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
