import React, { Component } from 'react';
import { RouteComponentProps, Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
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
        const title = <h2>{item.iD ? 'Edit Project' : 'Add Project'}</h2>;
        console.log(this.props.match.params.id) //need for query / update a single project
    
        return <div>
          <AppNavbar/>
          <Container>
            {title}
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" value={item.name || ''}
                       onChange={this.handleChange} autoComplete="name"/>
              </FormGroup>
              <FormGroup>
                <Label for="description">description</Label>
                <Input type="text" name="description" id="description" value={item.description || ''}
                       onChange={this.handleChange} autoComplete="description"/>
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