import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

interface IProps {

}

interface IState {
  isLoading: boolean;
  unityprojects: [{
    id: number;
    unityprojectname: string;
  }]
}

class App extends Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      isLoading: true,
      unityprojects: [{
        id: 9,
        unityprojectname: ""
      }]
    };
  }

  async componentDidMount() {
    const response = await fetch('/api/getallunityprojects');
    const body = await response.json();
    console.log(body);
    this.setState({ unityprojects: body, isLoading: false });
  }
  render() {
    const { unityprojects, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-intro">
            <h2>JUG List</h2>
            {unityprojects.map(project =>
              <div key={project.id}>
                {project.unityprojectname}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}


export default App;
