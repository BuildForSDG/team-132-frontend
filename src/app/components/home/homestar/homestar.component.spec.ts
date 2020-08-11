import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestarComponent } from './homestar.component';

describe('HomestarComponent', () => {
  let component: HomestarComponent;
  let fixture: ComponentFixture<HomestarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
