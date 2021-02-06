import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Projects from './components/projectComponents/Projects';
import AboutContainer from './containers/AboutContainer';
import NavBarContainer from './containers/NavBarContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
                {/* specifying with the 'exact' keyword since other routes share part of this URL */}
              <Route exact path="/" component={ HomeContainer }/>
              <Route exact path="/projects" component={ Projects }/> 
              <Route  path="/about" component={ AboutContainer }/>
        </Switch>  
      <NavBarContainer />
      </Router>
    </div>
  );
}

export default App;

