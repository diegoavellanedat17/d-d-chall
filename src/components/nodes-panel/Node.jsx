import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget } from '../nodes/imagenode/ImageNodeWidget';
import { Ec2NodeWidget } from '../nodes/ec2node/Ec2NodeWidget';
import { ElbNodeWidget } from '../nodes/elbnode/ElbNodeWidget';
import { RdsNodeWidget } from '../nodes/rdsnode/RdsNodeWidget';
import { EditNodeWidget } from '../nodes/editnode/EditNodeWidget';

class Node extends React.Component {
    renderNode() {
        const { type, color } = this.props;
       
        if (type === 'imagenode') {
            return <ImageNodeWidget node={{ name: 'Image node' }} color={color}  displayOnly/>;
        }

        else if(type === 'ec2node'){
            return <Ec2NodeWidget node={{ name: 'Ec2 node' }} color={color}  displayOnly/>;
        }

        else if(type === 'elbnode'){
            return <ElbNodeWidget node={{ name: 'Elb node' }} color={color}  displayOnly/>;
        }

        else if(type === 'rdsnode'){
            return <RdsNodeWidget node={{ name: 'Rds node' }} color={color}  displayOnly/>;
        }

        else if(type === 'editnode'){
            return <EditNodeWidget node={{ name: 'Edit node' }} color={color}  displayOnly/>;
        }
        
        console.warn('Unknown node type');

        return null;
    }

    render() {
        const { type, color } = this.props;

        return (
            <DragWrapper type={type} color={color} style={{ display: 'inline-block' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;