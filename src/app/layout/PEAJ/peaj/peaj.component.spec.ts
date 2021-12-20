import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeajComponent } from './peaj.component';

describe('PeajComponent', () => {
  let component: PeajComponent;
  let fixture: ComponentFixture<PeajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
