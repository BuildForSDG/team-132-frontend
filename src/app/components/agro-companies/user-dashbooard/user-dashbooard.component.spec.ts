import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashbooardComponent } from './user-dashbooard.component';

describe('UserDashbooardComponent', () => {
	let component: UserDashbooardComponent;
	let fixture: ComponentFixture<UserDashbooardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserDashbooardComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserDashbooardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
