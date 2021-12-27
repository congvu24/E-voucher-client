import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RStatusTagComponent } from './r-status-tag.component';

describe('RStatusTagComponent', () => {
  let component: RStatusTagComponent;
  let fixture: ComponentFixture<RStatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RStatusTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RStatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
