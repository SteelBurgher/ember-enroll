import {
  validatePresence,
  validateNumber,
} from 'ember-changeset-validations/validators';

export default {
  children: [validatePresence(true), validateNumber({ gte: 0 })],
  address: validatePresence(true),
  firstName: validatePresence(true),
  lastName: validatePresence(true),
};
