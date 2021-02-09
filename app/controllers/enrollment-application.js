import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EnrollmentApplicationController extends Controller {
  @action
  async submitApplication() {
    const {
      otherValidated,
      aboutYouValidated,
      financialInformationValidated,
    } = this.model;
    if (otherValidated && aboutYouValidated && financialInformationValidated) {
      this.model.user.submittedApplication = true;
      await this.model.user.save();
    } else {
      const sections = [
        { validated: aboutYouValidated, text: 'About You' },
        {
          validated: financialInformationValidated,
          text: 'Financial Information',
        },
        { validated: otherValidated, text: 'Other' },
      ]
        .filter(({ validated }) => !validated)
        .map(({ text }, index, arr) => {
          return arr.length > 1 && index === arr.length - 1
            ? `and ${text}`
            : text;
        });
      let err = `You must complete and save the ${sections.join(', ')} section${
        sections.length === 1 ? '' : 's'
      }.`;
      this.model.errorMessage = err;
    }
  }
  @action
  async resetExperience() {
    await this.model.user.destroyRecord();
    this.store.unloadAll('user');
    this.transitionToRoute('index');
  }
}
