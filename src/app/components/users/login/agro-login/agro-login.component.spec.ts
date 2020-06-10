import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroLoginComponent } from './agro-login.component';

describe('AgroLoginComponent', () => {
  let component: AgroLoginComponent;
  let fixture: ComponentFixture<AgroLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
