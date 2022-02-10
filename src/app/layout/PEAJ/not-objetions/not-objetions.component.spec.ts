import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotObjetionsComponent } from './not-objetions.component';

describe('NotObjetionsComponent', () => {
  let component: NotObjetionsComponent;
  let fixture: ComponentFixture<NotObjetionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotObjetionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotObjetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
