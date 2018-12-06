import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Header from './Header';
import VetDashboard from '../components/Vet/VetDashboard';
import PetOwnerDashboard from '../components/PetOwnerDashboard';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/vetdashboard" component={VetDashboard}/>
          <Route path="/petownerdashboard" component={PetOwnerDashboard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
