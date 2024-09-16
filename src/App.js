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
     

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/Catgorary" element={<SportsCat/>} />

        <Route path="/service" element={<Service />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>

    </div>
  );
}

export default App;