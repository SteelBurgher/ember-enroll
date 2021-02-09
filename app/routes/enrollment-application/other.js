import Route from '@ember/routing/route';

export default class EnrollmentApplicationOtherRoute extends Route {
  model() {
    return this.modelFor('enrollment-application');
  }
}
