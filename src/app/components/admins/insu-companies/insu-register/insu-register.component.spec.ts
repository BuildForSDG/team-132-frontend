import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuRegisterComponent } from './insu-register.component';

describe('InsuRegisterComponent', () => {
  let component: InsuRegisterComponent;
  let fixture: ComponentFixture<InsuRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
