import './App.css';
import Header from './components/Header';
import Players from './components/Players';
import ViewPlayer from './components/ViewPlayer';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Header/>
          <Route path="/" exact component={Home}/>
          <Route path="/players" exact component={Players}/>
          <Route path="/players/:id" exact component={ViewPlayer}/>
      </div>
    </Router>
  );
}

export default App;
