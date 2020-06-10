import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrologinComponent } from './agrologin.component';

describe('AgrologinComponent', () => {
  let component: AgrologinComponent;
  let fixture: ComponentFixture<AgrologinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgrologinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrologinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
