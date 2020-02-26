import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Storage2Page } from './storage2.page';

describe('Storage2Page', () => {
  let component: Storage2Page;
  let fixture: ComponentFixture<Storage2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Storage2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Storage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
