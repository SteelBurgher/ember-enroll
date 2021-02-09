import Component from '@glimmer/component';
import { action } from '@ember/object';
import FinancialInformationValidation from '../validations/financial-information';

export default class FinancialInformationFormComponent extends Component {
  FinancialInformationValidation = FinancialInformationValidation;

  @action
  handleSubmit(changeset) {
    changeset.save();
    this.args.onSubmit();
  }
}
