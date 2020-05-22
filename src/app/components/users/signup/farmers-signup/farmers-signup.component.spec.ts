import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersSignupComponent } from './farmers-signup.component';

describe('FarmersSignupComponent', () => {
  let component: FarmersSignupComponent;
  let fixture: ComponentFixture<FarmersSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
