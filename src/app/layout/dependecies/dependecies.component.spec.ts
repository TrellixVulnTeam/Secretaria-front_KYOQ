import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependeciesComponent } from './dependecies.component';

describe('DependeciesComponent', () => {
  let component: DependeciesComponent;
  let fixture: ComponentFixture<DependeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
