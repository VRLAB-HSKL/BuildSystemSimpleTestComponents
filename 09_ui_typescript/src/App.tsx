import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProjectDataList from './components/ProjectDataList';
import EditProjectData from './components/EditProjectData';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/projectdata' exact={true} component={ProjectDataList}/>
          <Route path='/projectdata/:id' component={EditProjectData}/>
        </Switch>
      </Router>
    )
  }
}

export default App;