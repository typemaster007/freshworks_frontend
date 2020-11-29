import NavigationBar from "./components/Navigation/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './components/Landing/Landing'
import UserPage from './components/Users/Users'
import ScientistPage from './components/Scientists/Scientists'


function App() {
  
  
   
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <NavigationBar/>
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/users" exact component={UserPage} />
            <Route path="/scientists" exact component={ScientistPage} />
        </Switch>
          
      </Router>
      </header>
    </div>
  );
}

export default App;
