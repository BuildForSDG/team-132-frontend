import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
	// eslint-disable-next-line consistent-return
	return (control: FormControl): { [key: string]: unknown } => {
		if (!words) {
			return null;
		}
		const arr = control.value;

		if (arr.length > 0) {
			const arr2 = words.map((x) => (arr.split(' ').includes(x) ? x : null)).filter((x) => x !== null);
			// const invalidWords = words.map(w => control.value.includes(w) ? w : null ).filter(x => x !== null);
			return arr2 && arr2.length > 0 ? { restrictedWords: arr2.join(', ') } : null;
		}
	};
}
