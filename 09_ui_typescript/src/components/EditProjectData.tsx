import React, { Component } from 'react';
import { RouteComponentProps, Link, withRouter } from 'react-router-dom';
import { Col, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

interface IProps extends RouteComponentProps<any> {
    title: string;
    id: number;
}

interface IState {
  
  dataItem: {
   
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
  }

  status: {
    inProgress: number;
    stable: number;
  }

  platformNames: string;
  
}



class EditProjectData extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {

            dataItem: {
               
                iD: 0,
                name: '',
                description: '',
                platformList: [{
                    platformName: '',
                }],
                status: {
                    inProgress : false,
                    stable : false,
                  },
                  gitUrl : '',
                  unityVersion : '',
            },

            status: {
              inProgress: 0,
              stable: 0,
            },

            platformNames : '',
            


        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


      async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
          console.log('/api/data/findById/'+ this.props.match.params.id)
          const data = await (await fetch(`/api/data/findById/?id=${this.props.match.params.id}`)).json();
          this.setState({dataItem: data});

          let platformList = this.state.dataItem.platformList;
          for(let key in platformList) {
            this.setState({platformNames: platformList[key].platformName });
          }
        }
      }
    
      handleChange() {
        
      }
    
      async handleSubmit() {
        
      }

    render() {
        const {status, dataItem} = this.state;
        const title = <h2>{dataItem.iD ? 'Edit Group' : 'Add Group'}</h2>;
        console.log(this.props.match.params.id) //need for query / update a single project
        let platformName : string = '';
        let plaformList = dataItem.platformList;
        for(let key in plaformList) {
          platformName += ' ['+ plaformList[key].platformName + ']';
        }

        let gitstatus = dataItem.status;
    
        return <div>
          <AppNavbar/>
          <Container>
            {title}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Project Name</Label>
                <Input type="text" name="name" id="name" value={dataItem.name || ''}
                       onChange={this.handleChange} autoComplete="name"/>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" value={dataItem.description || ''}
                       onChange={this.handleChange} autoComplete="description"/>
              </FormGroup>
              <FormGroup>
                <Label for="platformlist">Platform</Label>
                <Input type="text" name="platformlist" id="platformlist" value={platformName}
                       onChange={this.handleChange} autoComplete="platformlist"/>
              </FormGroup>
              <FormGroup row>
                <Label for="inprogress" sm={2}>Git-Status</Label>
                <Col sm={{ size: 10 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" id="inprogress" value={status.inProgress} />{' '}
                      in Progress
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" id="stable" value={status.stable} />{' '}
                      Stable
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="gitUrl">Git-Url</Label>
                <Input type="text" name="giturl" id="giturl" value={dataItem.gitUrl || ''}
                        onChange={this.handleChange} autoComplete="giturl" />
              </FormGroup>
              <FormGroup>
                <Label for="unityVersion">Unity Version</Label>
                <Input type="text" name="unityVersion" id="unityVersion" value={dataItem.unityVersion || ''}
                        onChange={this.handleChange} autoComplete="unityVersion" />
              </FormGroup>
              <FormGroup>
                <Button color="primary" type="submit">Save</Button>{' '}
                <Button color="secondary" tag={Link} to="/projectdata">Cancel</Button>
              </FormGroup>
            </Form>
          </Container>
        </div>
      }
    }
    
    export default withRouter(EditProjectData);