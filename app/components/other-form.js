import Component from '@glimmer/component';
import { action } from '@ember/object';
import OtherValidations from '../validations/other';

export default class OtherFormComponent extends Component {
  OtherValidations = OtherValidations;

  @action
  handleSubmit(changeset) {
    changeset.save();
    this.args.onSubmit();
  }
}
