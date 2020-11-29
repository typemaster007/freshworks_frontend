import NavigationBar from "./components/Navigation/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
  
  
   
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <NavigationBar/>
          
      </Router>
      </header>
    </div>
  );
}

export default App;
