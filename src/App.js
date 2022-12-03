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
import OrderUserInfo from './Pages/OrderUserInfo';
import Cart from './Pages/Cart';
import Success from './Pages/Success';
import Erorr404 from './Pages/Erorr404';
import Failed from './Pages/Failed';
import SportsCategory from './components/Category/SportsCategory';





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
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/detail/:id" element={<JerseyCatergory />} />
        <Route path="/detail/Order/:id" element={<Details />} />
        <Route path="/Cart" element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
        <Route path="/userOrderInfo" element={<ProtectedRoutes><OrderUserInfo /></ProtectedRoutes>} />
        <Route path="/signup" element={<SignUP />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />
        <Route path="/sports" element={<SportsCategory />} />
        <Route path="*" element={<Erorr404 />} />


      </Routes>

    </div >
  );
}

export default App;
