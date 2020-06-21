import React, { Component } from 'react';
import { RouteComponentProps, Link, withRouter } from 'react-router-dom';
import { Col, Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';

interface IProps extends RouteComponentProps<any> {
    title: string;
}

interface IState {
  
  item: {
   
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
}


class EditProjectData extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {

            item: {
               
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
              }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    async componentDidMount() {
        
      }
    
      handleChange() {
        
      }
    
      async handleSubmit() {
        
      }

    render() {
        const {item} = this.state;
        const title = <h2>{this.props.match.params.id ? 'Edit Project' : 'Add Project'}</h2>;
        console.log(this.props.match.params.id) //need for query / update a single project
    
        return <div>
          <AppNavbar/>
          <Container>
            {title}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Project Name</Label>
                <Input type="text" name="name" id="name" value={item.name || ''}
                       onChange={this.handleChange} autoComplete="name"/>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" value={item.description || ''}
                       onChange={this.handleChange} autoComplete="description"/>
              </FormGroup>
              <FormGroup>
                <Label for="platformlist">Platform</Label>
                <Input type="text" name="platformlist" id="platformlist"
                       onChange={this.handleChange} autoComplete="platformlist"/>
              </FormGroup>
              <FormGroup row>
                <Label for="inprogress" sm={2}>Git-Status</Label>
                <Col sm={{ size: 10 }}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" id="inprogress" />{' '}
                      in Progress
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" id="stable" />{' '}
                      Stable
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="gitUrl">Git-Url</Label>
                <Input type="text" name="giturl" id="giturl" value={item.gitUrl || ''}
                        onChange={this.handleChange} autoComplete="giturl" />
              </FormGroup>
              <FormGroup>
                <Label for="unityVersion">Unity Version</Label>
                <Input type="text" name="unityVersion" id="unityVersion" value={item.unityVersion || ''}
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