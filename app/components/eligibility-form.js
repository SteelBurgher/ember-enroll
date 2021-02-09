import Component from '@glimmer/component';
import { action } from '@ember/object';
import EligibilityValidations from '../validations/eligibility-data';

export default class EligibilityFormComponent extends Component {
  EligibilityValidations = EligibilityValidations;
  eligibilityData = {
    children: 0,
    pregnantAdults: 0,
    nonPregnantAdults: 0,
    fosterMedicaire: false,
  };

  @action
  handleSubmit(changeset) {
    changeset.save();
    this.args.onSubmit(this.eligibilityData);
  }
}
