import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import AboutContainer from './containers/AboutContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
                {/* specifying with the 'exact' keyword since other routes share part of this URL */}
              <Route exact path="/" component={ HomeContainer }/>
              <Route exact path="/projects" component={ ProjectsContainer }/> 
              <Route  path="/about" component={ AboutContainer }/>
        </Switch>  
      </Router>
      {/* <NavBar /> */}
    </div>
  );
}

export default App;

