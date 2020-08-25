import { TestBed } from '@angular/core/testing';

import { InsuGuardGuard } from './insu-guard.guard';

describe('InsuGuardGuard', () => {
	let guard: InsuGuardGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(InsuGuardGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
