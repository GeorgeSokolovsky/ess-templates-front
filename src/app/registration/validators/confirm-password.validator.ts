import {FormGroup} from '@angular/forms';

export function confirmPasswordValidator(group: FormGroup) {
    const pass = group.get('password');
    const confirmed = group.get('confirmPassword');

    if (!pass.value || !confirmed.value) {
        return;
    }

    if (pass.value !== confirmed.value) {
        if (confirmed.hasError('confirmation')) {
            return;
        }

        const previousErrors = confirmed.errors;

        confirmed.setErrors({
            ...previousErrors,
            confirmation: 'Password is not the same'
        });
        group.updateValueAndValidity();

        return;
    }

    const {length: errorsCount} = confirmed.errors ? Object.keys(confirmed.errors) : [];

    if (errorsCount === 1 && confirmed.hasError('confirmation')) {
        confirmed.setErrors(null);
    }
}
