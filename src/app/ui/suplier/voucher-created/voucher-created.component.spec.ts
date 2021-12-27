import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherCreatedComponent } from './voucher-created.component';

describe('VoucherCreatedComponent', () => {
  let component: VoucherCreatedComponent;
  let fixture: ComponentFixture<VoucherCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoucherCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoucherCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
