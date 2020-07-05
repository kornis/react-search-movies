import React, {Component} from 'react';
import './css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import {Detail} from './pages/detail';
import {Home} from './pages/home';
import {NotFound} from './pages/not-found';

class App extends Component {
render(){

  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/detail/:id' component={Detail}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      </div>
    )
  }
}

export default App;
