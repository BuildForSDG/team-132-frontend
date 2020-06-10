// eslint-disable-next-line import/default
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/default
import app from '../src/index.js';

describe('app module', () => {
	test('it exists', async () => {
		expect(app).toBeDefined();
	});

	test('it returns program name with SDGs', async () => {
		const result = await app();
		const sdgPos = (result || '').indexOf('SDG');
		expect(sdgPos).toBeGreaterThanOrEqual(0);
	});
});
