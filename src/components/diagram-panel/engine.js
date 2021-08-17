import React from 'react';
import * as RJD from '../../../lib/main';
import { ImageNodeNodeWidgetFactory } from '../nodes/imagenode/ImageNodeWidgetFactory';
import { ImageNodeFactory } from '../nodes/imagenode/ImageNodeInstanceFactories';
import { Ec2NodeNodeWidgetFactory } from '../nodes/ec2node/Ec2NodeWidgetFactory';
import { ElbNodeNodeWidgetFactory } from '../nodes/elbnode/ElbNodeWidgetFactory';
import { RdsNodeNodeWidgetFactory } from '../nodes/rdsnode/RdsNodeWidgetFactory';
import { EditNodeNodeWidgetFactory } from '../nodes/editnode/EditNodeWidgetFactory';

import { Ec2NodeFactory } from '../nodes/ec2node/Ec2NodeInstanceFactories';
import { ElbNodeFactory } from '../nodes/elbnode/ElbNodeInstanceFactories';
import { RdsNodeFactory } from '../nodes/rdsnode/RdsNodeInstanceFactories';
import { EditNodeFactory } from '../nodes/editnode/EditNodeInstanceFactories';

// Setup the diagram engine
export const engine = new RJD.DiagramEngine();
engine.registerNodeFactory(new RJD.DefaultNodeFactory());
engine.registerLinkFactory(new RJD.DefaultLinkFactory());

engine.registerNodeFactory(new ImageNodeNodeWidgetFactory());
engine.registerNodeFactory(new Ec2NodeNodeWidgetFactory());
engine.registerNodeFactory(new ElbNodeNodeWidgetFactory());
engine.registerNodeFactory(new RdsNodeNodeWidgetFactory());
engine.registerNodeFactory(new EditNodeNodeWidgetFactory());

// We need this to help the system know what models to create form the JSON
engine.registerInstanceFactory(new RJD.DefaultNodeInstanceFactory());
engine.registerInstanceFactory(new RJD.DefaultPortInstanceFactory());
engine.registerInstanceFactory(new RJD.LinkInstanceFactory());



engine.registerInstanceFactory(new ImageNodeFactory());
engine.registerInstanceFactory(new Ec2NodeFactory());
engine.registerInstanceFactory(new ElbNodeFactory());
engine.registerInstanceFactory(new RdsNodeFactory());
engine.registerInstanceFactory(new EditNodeFactory());




