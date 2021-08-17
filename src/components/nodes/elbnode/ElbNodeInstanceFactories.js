import * as RJD from '../../../../lib/main';
import { ElbNodeModel } from './ElbNodeModel';

export class ElbNodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('ElbNodeModel');
  }

  getInstance() {
    return new ElbNodeModel();
  }
}
