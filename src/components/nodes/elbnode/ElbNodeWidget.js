import React from 'react';
import * as RJD from '../../../../lib/main';
import { ElbNodeModel } from './ElbNodeModel';

export class ElbNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    color: 'rgb(224, 98, 20)'
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPort() {
    const { node, color, displayOnly } = this.props;
    let inputNode = node;

    if (displayOnly) {
      
      inputNode = new ElbNodeModel(node.name, color);
    }

    return inputNode.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
  }

  getOutPort() {
    const { node, color, displayOnly } = this.props;
    let outputNode = node;

    if (displayOnly) {
      outputNode = new ElbNodeModel(node.name, color);
    }

    return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
  }

  render() {


    const { node, displayOnly, color: displayColor } = this.props;
    const { name, color } = node;
    const style = {};
    if (color || displayColor) {
      style.background = color || displayColor;
    }
   
   
      return (
        
        <div className='elb-basic-node' style={style}>
          <div className='elb-image'>
          
          </div>
          {!displayOnly ? <div className='fa fa-close' onClick={this.onRemove.bind(this)} /> : null}
          
          <div className='ports'>
            <div className='in'>
              {this.getInPort()}
            </div>
            <div className='out'>
              {this.getOutPort()}
            </div>
          </div>

          <div className="elb-text">
            Elastic Load Balancing
          </div>

        </div>
      );

    
    }

  
}

export const ElbNodeWidgetFactory = React.createFactory(ElbNodeWidget);
