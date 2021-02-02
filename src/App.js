import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <Switch>
            {/* specifying with the 'exact' keyword since other routes share part of this URL */}
          <Route exact path="/" component={ HomeContainer }/>
          <Route exact path="/projects" component={ ProjectsContainer }/> 
          <Route  path="/about" component={ About }/>
    </Switch>  
      <NavBar />
    </div>
  );
}

export default App;
