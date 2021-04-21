import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      
        <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                <Route exact path="/">
                    <Home></Home>
                </Route>

                <Route path="/league/:leagueId">
                    <LeagueDetails></LeagueDetails>
                </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
