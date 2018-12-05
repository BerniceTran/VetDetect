import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import Results from '../components/SearchResults';
import Header from './Header';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Results" component={Results}/>
        </Switch>
      </div>
    );
  }
}

export default App;
