import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TongdanComponent } from './tongdan.component';

describe('TongdanComponent', () => {
  let component: TongdanComponent;
  let fixture: ComponentFixture<TongdanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TongdanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TongdanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
