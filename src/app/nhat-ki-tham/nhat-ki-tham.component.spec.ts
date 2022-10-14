import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhatKiThamComponent } from './nhat-ki-tham.component';

describe('NhatKiThamComponent', () => {
  let component: NhatKiThamComponent;
  let fixture: ComponentFixture<NhatKiThamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NhatKiThamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NhatKiThamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
