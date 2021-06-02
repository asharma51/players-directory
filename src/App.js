import './App.css';
import Header from './components/Header';
import Players from './components/Players';
import NavBar from './components/NavBar';
import Jumbo from './components/Jumbotron';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Jumbo/>
      <Header/>
      <Players/>
    </div>
  );
}

export default App;
