import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
	// tslint:disable-next-line: directive-selector
	selector: '[appconfirmpassword]',
	providers: [
		{
			provide: NG_VALIDATORS,
			// eslint-disable-next-line @typescript-eslint/no-use-before-define
			useExisting: ConfirmedEqualValidatorDirective,
			multi: true
		}
	]
})
export class ConfirmedEqualValidatorDirective implements Validator {
	@Input() appconfirmpassword: string;

	validate(control: AbstractControl): { [Key: string]: unknown } | null {
		const controlToCompare = control.parent.get(this.appconfirmpassword);

		if (controlToCompare && controlToCompare.value !== control.value) {
			return { notEqual: true };
		}

		return null;
	}
}
