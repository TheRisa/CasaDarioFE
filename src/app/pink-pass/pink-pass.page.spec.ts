import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinkPassPage } from './pink-pass.page';

describe('PinkPassPage', () => {
  let component: PinkPassPage;
  let fixture: ComponentFixture<PinkPassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PinkPassPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinkPassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
