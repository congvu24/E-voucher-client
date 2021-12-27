import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VStatusTagComponent } from './v-status-tag.component';

describe('VStatusTagComponent', () => {
  let component: VStatusTagComponent;
  let fixture: ComponentFixture<VStatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VStatusTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VStatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
