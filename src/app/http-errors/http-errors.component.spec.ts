import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorsComponent } from './http-errors.component';

describe('HttpErrorsComponent', () => {
  let component: HttpErrorsComponent;
  let fixture: ComponentFixture<HttpErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
