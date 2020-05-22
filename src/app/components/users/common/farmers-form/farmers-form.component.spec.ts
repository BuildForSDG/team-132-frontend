import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersFormComponent } from './farmers-form.component';

describe('FarmersFormComponent', () => {
  let component: FarmersFormComponent;
  let fixture: ComponentFixture<FarmersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
