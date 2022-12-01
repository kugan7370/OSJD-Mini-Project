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
import { useEffect } from 'react';
import ProtectedRoutes from './HOC/ProtectedRoutes';
import { isUser } from './Features/User/userSlicer';
import { useDispatch, useSelector } from 'react-redux';
import JerseyCatergory from './components/Category/JerseyCatergory';
import CheckOut from './Pages/CheckOut';





function App() {
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.users.user)

  useEffect(() => {
    if (!userdata) {
      dispatch(isUser())
    }


  }, [userdata, dispatch])



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
        <Route path="/contact" element={<ProtectedRoutes><Contact /></ProtectedRoutes>} />
        <Route path="/about" element={<ProtectedRoutes><About /></ProtectedRoutes>} />
        <Route path="/service" element={<ProtectedRoutes><Service /></ProtectedRoutes>} />
        <Route path="/detail/:id" element={<ProtectedRoutes><JerseyCatergory /></ProtectedRoutes>} />
        <Route path="/detail/Order/:id" element={<ProtectedRoutes><Details /></ProtectedRoutes>} />
        <Route path="/CheckOut" element={<ProtectedRoutes><CheckOut /></ProtectedRoutes>} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/signin" element={<SignIn />} />


      </Routes>

    </div >
  );
}

export default App;
