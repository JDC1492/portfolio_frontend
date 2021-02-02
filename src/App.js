import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { fetchProjects } from '../actions/ActIndex';
class App extends Component {
    
    componentDidMount =() => {

    }
  
  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
                  {/* specifying with the 'exact' keyword since other routes share part of this URL */}
                <Route exact path="/" component={ HomeContainer }/>
                <Route exact path="/projects" component={ ProjectsContainer }/> 
                <Route  path="/about" component={ About }/>
          </Switch>  
        </Router>
          <NavBar />
      </div>
    );
  }
}

export default App;

