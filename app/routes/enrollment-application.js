import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class EnrollmentModel {
  aboutYouValidated = false;
  financialInformationValidated = false;
  otherValidated = false;
  @tracked errorMessage = '';
  constructor(user) {
    this.user = user;
  }
}
export default class EnrollmentApplicationRoute extends Route {
  async model() {
    const users = await this.store.findAll('user');
    if (!users.firstObject) {
      this.transitionTo('index');
    }

    return new EnrollmentModel(users.firstObject);
  }
}
