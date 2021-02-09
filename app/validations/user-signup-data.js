// validations/employee.js
import {
  validatePresence,
  validateLength,
  validateConfirmation,
  validateFormat,
} from 'ember-changeset-validations/validators';

function validatePasswordStrength() {
  return (key, newValue) => {
    newValue = newValue ?? '';
    var regex = new RegExp(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    );
    const hasRequired = regex.test(newValue);
    return hasRequired
      ? true
      : 'Your password must include lower case, upper case, numeric, and special (!@#$%^&*) characters';
  };
}

export default {
  firstName: validatePresence(true),
  lastName: validatePresence(true),
  emailAddress: validateFormat({ type: 'email' }),
  password: [validateLength({ min: 8 }), validatePasswordStrength()],
  passwordConfirmation: validateConfirmation({ on: 'password' }),
};
