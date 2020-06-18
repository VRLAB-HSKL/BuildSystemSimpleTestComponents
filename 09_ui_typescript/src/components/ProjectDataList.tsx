import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import './ProjectData.css';



interface IProps {

}

interface IState {
  isLoading: boolean;
  persons: [{
    id: number;
    firstName: string;
    lastName: string;
    age: number;
  }]

  projectdata: [{
    iD : number;
    name : string;
    description : string;
    platformList : [{
      platformName : string;
    }]
    status: [{
      inProgress : boolean;
      stable : boolean;
    }]
    gitUrl : string;
    unityVersion : string;
  }]
}

class projectDataList extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
      persons: [{
        id: 0,
        firstName : "",
        lastName : "",
        age: 12,
      }],

      projectdata: [{
        iD : 0,
        name : "",
        description : "",
        platformList : [{
          platformName : "",
        }],
        status: [{
          inProgress : false,
          stable : false,
        }],
        gitUrl : "test",
        unityVersion : "2016",
      }]
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});

    //fetch('/api/persons/getallpersons')
    //.then(response => response.json())
    //.then(data => this.setState({persons: data, isLoading: false}));

    fetch('/api/data/getallprojectdata')
    .then(response => response.json())
    .then(data => this.setState({projectdata: data, isLoading: false}));
   
  }

  render() {
    const {projectdata, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    console.log(this.state.projectdata)
    const projectDataList = projectdata.map(project => {
      const id = project.iD;
      const projectName = `${project.name || ''}`;
      const description = `${project.description || ''}`;
      const platformList = `${project.platformList[0].platformName || ''}`;
      const status = `${project.status || ''}`;
      const giturl = `${project.gitUrl|| ''}`;
      console.log(giturl);
      console.log(project.platformList);
      console.log(project.platformList[0].platformName + ", " + project.platformList[1].platformName);
      
      
      const unityversion = `${project.unityVersion|| ''}`;
      
      return <tr key={id}>
          <td style={{whiteSpace: 'nowrap'}}>{id}</td>
          <td>{projectName}</td>
          <td>{description}</td>
          <td>{platformList}</td>
          <td>{status}</td>
          <td>{giturl}</td>
          <td>{unityversion}</td>
          
          <td>
              <ButtonGroup>
                  <Button size="sm" color="primary" tag={Link} to={"/projectdata/" + id}>Edit</Button>
                  <Button size="sm" color="danger" /* delete stuff to do */>Delete</Button>
              </ButtonGroup>
          </td>
      </tr>

  });

    return (
      <div>
        <AppNavbar/>
            <Container fluid>
            <div className="float-right">
                <Button color="success" tag={Link} to="/projectdata/new">Add Project</Button>
            </div>
            <h3>Project Manager</h3>
            <Table className="mt-4">
                <thead>
                <tr>
                    <th id="id"> ID </th>
                    <th id="name"> Name </th>
                    <th id="desc"> Description </th>
                    <th id="platform"> Platforms </th>
                    <th id="status"> Status </th>
                    <th id="github"> Git-Url </th>
                    <th id="unity-vers"> Unity-Version </th>
                </tr>
                </thead>
                <tbody>
                    {projectDataList}
                </tbody>
            </Table>
            </Container>
      </div>
    );
  }
}

export default projectDataList;