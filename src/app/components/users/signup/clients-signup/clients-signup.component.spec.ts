import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSignupComponent } from './clients-signup.component';

describe('ClientsSignupComponent', () => {
  let component: ClientsSignupComponent;
  let fixture: ComponentFixture<ClientsSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
