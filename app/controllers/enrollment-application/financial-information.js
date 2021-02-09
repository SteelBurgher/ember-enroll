import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EnrollmentApplicationFinancialInformationController extends Controller {
  @action
  async saveFinancialInformation() {
    await this.model.user.save();
    this.model.financialInformationValidated = true;
    this.transitionToRoute('enrollment-application.other');
  }
}
