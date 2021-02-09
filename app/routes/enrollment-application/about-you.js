import Route from '@ember/routing/route';

export default class EnrollmentApplicationAboutYouRoute extends Route {
  model() {
    return this.modelFor('enrollment-application');
  }
}
