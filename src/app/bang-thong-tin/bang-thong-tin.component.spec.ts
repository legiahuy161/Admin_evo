import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangThongTinComponent } from './bang-thong-tin.component';

describe('BangThongTinComponent', () => {
  let component: BangThongTinComponent;
  let fixture: ComponentFixture<BangThongTinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangThongTinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BangThongTinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
