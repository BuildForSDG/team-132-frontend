import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuEditComponent } from './insu-edit.component';

describe('InsuEditComponent', () => {
  let component: InsuEditComponent;
  let fixture: ComponentFixture<InsuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
