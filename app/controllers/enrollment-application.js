import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EnrollmentApplicationController extends Controller {
  @action
  async submitApplication() {
    this.model.user.submittedApplication = true;
    await this.model.user.save();
  }
  @action
  async resetExperience() {
    await this.model.user.destroyRecord();
    this.transitionToRoute('index');
  }
}
