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
import Details from './components/Details/Details';
import SignIn from './Pages/SignIn';
import SignUP from './Pages/SignUp';






function App() {
  const token = localStorage.getItem('token')
  const users = JSON.parse(localStorage.getItem('user'))



  const user = null;


  return (
    <div className="App">
      <Header />

      <Routes>

        {!user ? (
          <>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUP />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/detail/:id" element={<Details />} />
          </>
        )
        }
      </Routes>

    </div>
  );
}

export default App;
