import { validatePresence } from 'ember-changeset-validations/validators';

export default {
  notesForReviewer: validatePresence(true),
};
