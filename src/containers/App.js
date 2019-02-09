import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import '../App.css';
import NavBar from './NavBar';
import Main from './Main';
import About from './About'
import Dashboard from '../components/Dashboard';


class App extends Component {
  render() {
    return (
    	<div className="App">
			<NavBar />
			<Switch>
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/subscriptions/new' component={Main} />
				<Route path='/subscriptions/:id' component={Main}/>
				<Route path='/subscriptions' component={Main}/>
				<Route component={About} />
			</Switch>
    	</div>
    );
  }
}

export default App;