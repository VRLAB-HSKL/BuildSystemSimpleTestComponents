import React, {Component} from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


interface IProps {

}

interface IState {
  
}

class UnityProjectConfiguration extends Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return(
            <div>
            <AppNavbar/>
                <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/unityconfigdata/new">Add Configuration</Button>
                </div>
                <h3>Unity Project Configurations</h3>
                <Table className="mt-4">
                    <thead>
                    <tr>
                        <th id="id"> ID </th>
                        <th id="name"> Name </th>
                        <th id="desc"> Description </th>
                        <th id="sceneName">Scene Name</th>
                        <th id="platform"> Platform </th>
                        <th id="buildtarget"> Buildtarget </th>
                        <th id="viu"> VIU </th>
                        <th id="gvr"> GVR </th>
                        <th id="wave"> WaveSDK </th>
                        <th id="MiddleVR"> MiddleVR </th>
                    </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </Table>
                </Container>
          </div>
        );
    }
}

export default UnityProjectConfiguration;