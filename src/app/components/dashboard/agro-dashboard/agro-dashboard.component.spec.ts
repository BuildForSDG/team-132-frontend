import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroDashboardComponent } from './agro-dashboard.component';

describe('AgroDashboardComponent', () => {
  let component: AgroDashboardComponent;
  let fixture: ComponentFixture<AgroDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
