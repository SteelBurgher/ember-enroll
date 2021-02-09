import {
  validatePresence,
  validateNumber,
} from 'ember-changeset-validations/validators';

export default {
  personalMonthlyIncome: [validatePresence(true), validateNumber({ gte: 0 })],
  househouldMonthlyIncome: [validatePresence(true), validateNumber({ gte: 0 })],
};
