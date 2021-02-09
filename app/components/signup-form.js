import Component from '@glimmer/component';
import UserSignupDataValidation from '../validations/user-signup-data';
import { action } from '@ember/object';

export default class SignupFormComponent extends Component {
  UserSignupDataValidation = UserSignupDataValidation;

  @action
  handleSubmit(changeset) {
    changeset.save();
    this.args.onSubmit();
  }
}
