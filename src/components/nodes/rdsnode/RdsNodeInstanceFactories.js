import * as RJD from '../../../../lib/main';
import { RdsNodeModel } from './RdsNodeModel';

export class RdsNodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('RdsNodeModel');
  }

  getInstance() {
    return new RdsNodeModel();
  }
}
