import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroCompaniesComponent } from './agro-companies.component';

describe('AgroCompaniesComponent', () => {
  let component: AgroCompaniesComponent;
  let fixture: ComponentFixture<AgroCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
