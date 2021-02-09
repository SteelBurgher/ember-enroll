import Route from '@ember/routing/route';

export default class EnrollmentApplicationRoute extends Route {
  async model() {
    const users = await this.store.findAll('user');
    if (!users.firstObject) {
      this.transitionTo('index');
    }
    return {
      user: users.firstObject,
      aboutYouValidated: false,
      financialInformationValidated: false,
      otherValidated: false,
    };
  }
}
