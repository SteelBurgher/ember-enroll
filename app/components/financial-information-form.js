import Component from '@glimmer/component';
import { action } from '@ember/object';
import FinancialInformationValidations from '../validations/financial-information';

export default class FinancialInformationFormComponent extends Component {
  FinancialInformationValidations = FinancialInformationValidations;

  @action
  handleSubmit(changeset) {
    changeset.save();
    this.args.onSubmit();
  }
}
