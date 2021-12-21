import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProvisComponent } from './modal-provis.component';

describe('ModalProvisComponent', () => {
  let component: ModalProvisComponent;
  let fixture: ComponentFixture<ModalProvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
