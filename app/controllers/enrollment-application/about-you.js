import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EnrollmentApplicationAboutYouController extends Controller {
  @action
  async saveAboutYou() {
    await this.model.user.save();
    this.model.aboutYouValidated = true;
    this.transitionToRoute('enrollment-application.financial-information');
  }
}
