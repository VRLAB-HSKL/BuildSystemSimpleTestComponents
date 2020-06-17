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
    id : number;
    name : string;
    description : string;
    platform : [{
      name : string;
    }]
    status: [{
      inProgress : boolean;
      stable : boolean;
    }]
    giturl : string;
    unityversion : string;
  }]
}

class PersonList extends Component<IProps, IState> {

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
        id : 0,
        name : "",
        description : "",
        platform : [{
          name : "",
        }],
        status: [{
          inProgress : false,
          stable : false,
        }],
        giturl : "",
        unityversion : "",
      }]


      
    };

   
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/api/persons/getallpersons')
    .then(response => response.json())
    .then(data => this.setState({persons: data, isLoading: false}));

    fetch('/api/data/getallprojectdata')
    .then(response => response.json())
    .then(datax => this.setState({projectdata: datax, isLoading: false}));
   
  }

  render() {
    const {persons, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    console.log(this.state.projectdata)
    const personList = persons.map(person => {
      const firstName = `${person.firstName || ''}`;
      const lastName = `${person.lastName || ''}`;
      const age = `${person.age || ''}`;
      const id = `${person.id || ''} `;
      return <tr key={person.id}>
          <td style={{whiteSpace: 'nowrap'}}>{id}</td>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{age}</td>
          
          <td>
              <ButtonGroup>
                  <Button size="sm" color="primary" tag={Link} to={"/persons"}>Edit</Button>
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
                <Button color="success" tag={Link} to="/unityprojects/new">Add Project</Button>
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
                    {personList}
                </tbody>
            </Table>
            </Container>
      </div>
    );
  }
}

export default PersonList;