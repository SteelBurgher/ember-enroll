import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
  @tracked
  hasEligibility = false;

  @action
  determineEligibility() {
    this.transitionToRoute('signup');
  }
}
