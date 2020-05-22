import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintsComponent } from './clints.component';

describe('ClintsComponent', () => {
  let component: ClintsComponent;
  let fixture: ComponentFixture<ClintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
