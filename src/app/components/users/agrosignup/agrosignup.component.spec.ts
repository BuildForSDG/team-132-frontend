import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrosignupComponent } from './agrosignup.component';

describe('AgrosignupComponent', () => {
  let component: AgrosignupComponent;
  let fixture: ComponentFixture<AgrosignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrosignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrosignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
