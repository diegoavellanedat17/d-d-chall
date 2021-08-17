import React from 'react';
import Node from './Node';

class NodesPanel extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <div className="nodes-panel">
                    <div className='node-wrapper'>

                        <Node type='editnode' color='rgb(238, 238, 238)'/>

                        <hr />

                        {/* <Node type='imagenode' color='rgb(238, 238, 238)'/> */}

                        <Node type='rdsnode' color='rgb(238, 238, 238)'/>
                      
                        <Node type='ec2node' color='rgb(238, 238, 238)'/>

                        <Node type='elbnode' color='rgb(238, 238, 238)'/>

                        

                       
                    </div>
                    {/* Other nodes */}
                </div>
            </div>
        );
    }
}

export default NodesPanel;