import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherRequestComponent } from './voucher-request.component';

describe('VoucherRequestComponent', () => {
  let component: VoucherRequestComponent;
  let fixture: ComponentFixture<VoucherRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
