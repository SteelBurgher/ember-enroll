import {
  validatePresence,
  validateNumber,
} from 'ember-changeset-validations/validators';

export default {
  personalMonthlyIncome: [validatePresence(true), validateNumber({ gte: 0 })],
  householdMonthlyIncome: [validatePresence(true), validateNumber({ gte: 0 })],
};
