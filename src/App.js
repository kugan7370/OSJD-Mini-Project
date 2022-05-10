import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import About from './Pages/About';
import Home from './Pages/Home';
import SportsCat from './Pages/SportsCat';
import SignIn from './Pages/SignIn';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Franks third project </code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="sum"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
