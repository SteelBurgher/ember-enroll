import {
  validatePresence,
  validateNumber,
} from 'ember-changeset-validations/validators';

function validateAdults() {
  return (key, newValue, oldValue, changes) => {
    const otherValid =
      key === 'pregnantAdults'
        ? changes.nonPregnantAdults > 0 || newValue > 0
        : changes.pregnantAdults > 0 || newValue > 0;
    return otherValid ? true : 'Please enter at least one adult family member';
  };
}

export default {
  pregnantAdults: [validatePresence(true), validateAdults()],
  nonPregnantAdults: [validatePresence(true), validateAdults()],
  children: [validatePresence(true), validateNumber({ gte: 0 })],
  fosterMedicaire: validatePresence(true),
  grossMonthlyIncome: [validatePresence(true), validateNumber({ gte: 0 })],
};
