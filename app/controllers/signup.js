import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SignupController extends Controller {
  @action
  async createUser() {
    console.log(this.model);
    await this.store
      .createRecord('user', {
        id: this.model.emailAddress,
        ...this.model,
      })
      .save();
    this.transitionToRoute('index');
  }
}
