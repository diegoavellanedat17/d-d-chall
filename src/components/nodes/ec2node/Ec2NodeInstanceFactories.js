import * as RJD from '../../../../lib/main';
import { Ec2NodeModel } from './Ec2NodeModel';

export class Ec2NodeFactory extends RJD.AbstractInstanceFactory {
  constructor() {
    super('Ec2NodeModel');
  }

  getInstance() {
    return new Ec2NodeModel();
  }
}
