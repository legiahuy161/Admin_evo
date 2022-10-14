import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuHoComponent } from './chu-ho.component';

describe('ChuHoComponent', () => {
  let component: ChuHoComponent;
  let fixture: ComponentFixture<ChuHoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChuHoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChuHoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
