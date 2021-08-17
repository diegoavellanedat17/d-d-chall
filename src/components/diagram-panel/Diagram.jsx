import React from 'react';
import { DropTarget } from 'react-dnd';
import * as RJD from '../../../lib/main';
import _ from 'lodash';

import { engine } from './engine';
import { ImageNodeModel } from '../nodes/imagenode/ImageNodeModel';
import { Ec2NodeModel } from '../nodes/ec2node/Ec2NodeModel';
import { ElbNodeModel } from '../nodes/elbnode/ElbNodeModel';
import { RdsNodeModel } from '../nodes/rdsnode/RdsNodeModel';
import { EditNodeModel } from '../nodes/editnode/EditNodeModel';



// Setup the diagram model
let diagramModel = new RJD.DiagramModel();

// React- DnD Properties  
const target = {
    drop(props, monitor) {
        const {x: pageX, y: pageY} = monitor.getSourceClientOffset();
        const {left = 0, top = 0} = engine.canvas.getBoundingClientRect();
        const {offsetX, offsetY} = engine.diagramModel;
        const x = pageX - left - offsetX;
        const y = pageY - top - offsetY;
        const item = monitor.getItem();
        
        let node;
        // According to the type show different nodes

        if (item.type === 'imagenode') {
            console.log('soltaste un imgNode')
            node = new ImageNodeModel('Image Node', 'rgb(124, 28, 120)', {
                title: '',
                body: '',
                video: {
                    url: ''
                },
                image: {
                    src: '',
                    alt: ''
                },
                info: {
                    title: '',
                    body: ''
                }
            });
        }

        else if(item.type === 'ec2node') {
 

            node = new Ec2NodeModel('Ec2 Node', 'rgb(11, 28, 120)', {
                title: '',
                body: '',
                video: {
                    url: ''
                },
                image: {
                    src: '',
                    alt: ''
                },
                info: {
                    title: '',
                    body: ''
                }
            });

            diagramModel.addNode(node);
        }

        else if(item.type === 'elbnode') {
 

            node = new ElbNodeModel('Elb Node', 'rgb(11, 28, 120)', {
                title: '',
                body: '',
                video: {
                    url: ''
                },
                image: {
                    src: '',
                    alt: ''
                },
                info: {
                    title: '',
                    body: ''
                }
            });

        
        }

        else if(item.type === 'rdsnode') {
 

            node = new RdsNodeModel('Rds Node', 'rgb(11, 28, 120)', {
                title: '',
                body: '',
                video: {
                    url: ''
                },
                image: {
                    src: '',
                    alt: ''
                },
                info: {
                    title: '',
                    body: ''
                }
            });

        
        }

        else if(item.type === 'editnode') {
 

            node = new EditNodeModel('Rds Node', 'rgb(11, 28, 120)', {
                title: '',
                body: '',
                video: {
                    url: ''
                },
                image: {
                    src: '',
                    alt: ''
                },
                info: {
                    title: '',
                    body: ''
                }
            });

        
        }



        node.x = x  ;
        node.y = y ;

        // clear previously selected item(s)
        diagramModel.clearSelection();

        // select dropped item
        node.setSelected(true);

        diagramModel.addNode(node);

        // update the diagram with new widget
        
        props.updateModel(diagramModel.serializeDiagram(), node.serialize());
    },
    hover(props,monitor,component){

    const getCoordinatesOnF = monitor.getClientOffset()

    //console.log(getCoordinatesOnF)

    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),

     
    };
}



class Diagram extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setModel(this.props.model);
        
    }

    componentWillReceiveProps(nextProps) {
        if(!_.isEqual(this.props, nextProps)) {
            this.setModel(nextProps.model, nextProps.selectedNode);
        }
    }

    setModel(model, selectedNode) {
        
        diagramModel = new RJD.DiagramModel();
        if (model) {
            diagramModel.deSerializeDiagram(model, engine);

            if (selectedNode) {
                diagramModel.clearSelection();
                const nodes = diagramModel.getNodes();
                const node = nodes[selectedNode.id];
                node.setSelected(true);
                //console.log(`nodo ${selectedNode.id} seleccionado`)
            }
        }
        engine.setDiagramModel(diagramModel);
    }

    onChangeHandler(model, action) {
       
        console.log(`diagram changed: ${action.type}`);

        // Ignore some events
        if (['items-copied'].indexOf(action.type) !== -1) {
            return;
        }

        // Check for canvas events
        const deselectEvts = ['canvas-click', 'canvas-drag', 'items-selected', 'items-drag-selected', 'items-moved'];
        if (deselectEvts.indexOf(action.type) !== -1) {
            
            if (action.model) {
                
                return this.props.updateModel(model, action.model.serialize());
            }
        }

        // Check for single selected items
        if (['node-selected', 'node-moved'].indexOf(action.type) !== -1) {
            console.log(action)
            
            return this.props.updateModel(model, action.model.serialize());

        }
        // e.g.: items-deleted
        this.props.updateModel(model);


    }


    render() {
        const { connectDropTarget } = this.props;

        return connectDropTarget (
            <div className="diagram">
                <RJD.DiagramWidget diagramEngine={engine} onChange={this.onChangeHandler.bind(this)}/>
            </div>
        )
    }

    
}

export default DropTarget('node-source', target, collect)(Diagram);
