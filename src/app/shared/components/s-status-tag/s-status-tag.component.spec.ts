import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SStatusTagComponent } from './s-status-tag.component';

describe('SStatusTagComponent', () => {
  let component: SStatusTagComponent;
  let fixture: ComponentFixture<SStatusTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SStatusTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SStatusTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
