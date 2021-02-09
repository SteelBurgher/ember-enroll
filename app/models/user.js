import Model, { attr } from '@ember-data/model';
import { inject as service } from '@ember/service';

export default class UserModel extends Model {
  @service indexedDb;

  @attr emailAddress;
  @attr firstName;
  @attr lastName;
  @attr password;
  @attr address;
  @attr children;
  @attr personalMonthlyIncome;
  @attr householdMonthlyIncome;
  @attr notesForReviewer;
  @attr('boolean') submittedApplication;
}
