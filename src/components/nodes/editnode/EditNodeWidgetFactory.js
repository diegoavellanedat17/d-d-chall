import * as RJD from '../../../../lib/main';
import { EditNodeWidgetFactory } from './EditNodeWidget';

export class EditNodeNodeWidgetFactory extends RJD.NodeWidgetFactory{
  constructor() {
    super('editnode');
  }

  generateReactWidget(diagramEngine, node) {
    return EditNodeWidgetFactory({ node });
  }
}
