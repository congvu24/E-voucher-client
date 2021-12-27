import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTypeTagComponent } from './v-type-tag.component';

describe('VTypeTagComponent', () => {
  let component: VTypeTagComponent;
  let fixture: ComponentFixture<VTypeTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTypeTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VTypeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
