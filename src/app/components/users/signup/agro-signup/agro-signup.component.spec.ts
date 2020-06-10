import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroSignupComponent } from './agro-signup.component';

describe('AgroSignupComponent', () => {
  let component: AgroSignupComponent;
  let fixture: ComponentFixture<AgroSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
