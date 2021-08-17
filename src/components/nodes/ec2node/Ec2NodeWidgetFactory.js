import * as RJD from '../../../../lib/main';
import { Ec2NodeWidgetFactory } from './Ec2NodeWidget';

export class Ec2NodeNodeWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('ec2node');
  }

  generateReactWidget(diagramEngine, node) {
    return Ec2NodeWidgetFactory({ node });
  }
}
