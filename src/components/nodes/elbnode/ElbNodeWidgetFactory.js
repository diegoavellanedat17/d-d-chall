import * as RJD from '../../../../lib/main';
import { ElbNodeWidgetFactory } from './ElbNodeWidget';

export class ElbNodeNodeWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('elbnode');
  }

  generateReactWidget(diagramEngine, node) {
    return ElbNodeWidgetFactory({ node });
  }
}
