import Route from '@ember/routing/route';

export default class EnrollmentApplicationIndexRoute extends Route {
  beforeModel() {
    this.replaceWith('enrollment-application.about-you');
  }
}
