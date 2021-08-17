import * as RJD from '../../../../lib/main';
import { RdsNodeWidgetFactory } from './RdsNodeWidget';

export class RdsNodeNodeWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('rdsnode');
  }

  generateReactWidget(diagramEngine, node) {
    return RdsNodeWidgetFactory({ node });
  }
}
