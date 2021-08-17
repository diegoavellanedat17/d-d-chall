import * as RJD from '../../../../lib/main';
import { EditNodeModel } from './EditNodeModel';

export class EditNodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('EditNodeModel');
  }

  getInstance() {
    return new EditNodeModel();
  }
}
