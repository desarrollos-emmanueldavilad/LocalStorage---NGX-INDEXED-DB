import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllStoragePage } from './all-storage.page';

describe('AllStoragePage', () => {
  let component: AllStoragePage;
  let fixture: ComponentFixture<AllStoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllStoragePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
