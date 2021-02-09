import Route from '@ember/routing/route';

export default class EnrollmentApplicationFinancialInformationRoute extends Route {
  model() {
    return this.modelFor('enrollment-application');
  }
}
