import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesdeComponentePage } from './desde-componente.page';

describe('DesdeComponentePage', () => {
  let component: DesdeComponentePage;
  let fixture: ComponentFixture<DesdeComponentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesdeComponentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesdeComponentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
