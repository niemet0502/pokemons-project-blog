import Pikachu from "./components/Pikachu/Pikachu"
import Bulbizarre from "./components/Bulbizarre/Bulbizarre"
import Abra from "./components/Abra/Abra"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Pikachu</Link>
              </li>
              <li>
                <Link to="/abra">Abra</Link>
              </li>
              <li>
                <Link to="/bulbizarre">Bulbizarre</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/abra">
              <Abra />
            </Route>
            <Route path="/bulbizarre">
              <Bulbizarre />
            </Route>
            <Route path="/">
              <Pikachu />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
