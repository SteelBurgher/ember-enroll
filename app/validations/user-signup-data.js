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
    const hasRequired = newValue.includes('');
    return otherValid ? true : 'Please enter at least one adult family member';
  };
}

export default {
  firstName: validatePresence(true),
  lastName: validatePresence(true),
  emailAddress: validateFormat({ type: 'email' }),
  password: [validateLength({ min: 8 })],
  passwordConfirmation: validateConfirmation({ on: 'password' }),
};
