import Component from '@glimmer/component';
import { action } from '@ember/object';
import AboutYouValidations from '../validations/about-you';

export default class AboutYouFormComponent extends Component {
  AboutYouValidations = AboutYouValidations;

  @action
  handleSubmit(changeset) {
    changeset.save();
    this.args.onSubmit();
  }
}
