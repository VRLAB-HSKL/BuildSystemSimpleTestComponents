import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import './ProjectData.css';



interface IProps {

}

interface IState {
  isLoading: boolean;
  error : boolean;
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
    status: {
      inProgress : boolean;
      stable : boolean;
    }
    gitUrl : string;
    unityVersion : string;
  }]
}

class projectDataList extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
      error: false,
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
        status: {
          inProgress : false,
          stable : false,
        },
        gitUrl : "test",
        unityVersion : "2016",
      }]
    };

    this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    //fetch('/api/persons/getallpersons')
    //.then(response => response.json())
    //.then(data => this.setState({persons: data, isLoading: false}));

    fetch('/api/data/findAll')
    .then(response => response.json())
    .then(data => this.setState({projectdata: data, isLoading: false}))
    .catch(error => this.setState({
      isLoading: false,
      error: true
    }));
   
  }

  async remove(id : number) {
    console.log('delete: ' + `/api/data/deleteById/?id=${id}`);
    await fetch(`/api/data/deleteById/?id=${id}`)
    fetch('/api/data/findAll')
    .then(response => response.json())
    .then(data => this.setState({projectdata: data, isLoading: false}))
    .catch(error => this.setState({
      isLoading: false,
      error: true
    }));
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
      let platform: string = "";
      let platFormList = project.platformList;
      //let platformList = `${project.platformList || ''}`; //[object Object],[object Object]
      for(let key in platFormList) {
        platform += ' ['+ platFormList[key].platformName + ']';
      }
      
      let statuscode = project.status;
      let statusstring: string = '';
      if (statuscode.inProgress && !statuscode.stable) {
        statusstring = 'inProgress';
      }

      if (!statuscode.inProgress && statuscode.stable) {
        statusstring = 'stable'
      }

      if (!statuscode.inProgress && !statuscode.stable) {
        statusstring = 'not defined yet'
      }
      
      const giturl = `${project.gitUrl|| ''}`;

      console.log(giturl);
      console.log(project.platformList[0]);
      console.log(project.platformList[0]);
      console.log(platform);
      
      
      const unityversion = `${project.unityVersion|| ''}`;
      
      return <tr key={id}>
          <td style={{whiteSpace: 'nowrap'}}>{id}</td>
          <td>{projectName}</td>
          <td>{description}</td>
          <td>{platform}</td>
          <td>{statusstring}</td>
          <td>{giturl}</td>
          <td>{unityversion}</td>
          
          <td>
              <ButtonGroup>
                  <Button size="sm" color="primary" tag={Link} to={"/projectdata/" + id}>Edit</Button>
                  <Button size="sm" color="danger" onClick={() => this.remove(id)}>Delete</Button>
                  <Button size="sm" color="primary">Create</Button>
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