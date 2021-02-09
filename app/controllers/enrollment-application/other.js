import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EnrollmentApplicationOtherController extends Controller {
  @action
  async saveOther() {
    await this.model.user.save();
    this.model.otherValidated = true;
  }
}
