import React, { useEffect } from "react";
import { useState } from "react";
import { MdSearch, MdAccountCircle } from "react-icons/md";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isUser, Logout } from "../Features/User/userSlicer";
import { getCartDetails } from "../Features/User/cartSlicer";

function Header() {
  const [userdetails, setuserdetails] = useState("");

  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.users.user);
  const getCarts = useSelector((state) => state.cart.carts);

  if (getCarts) {
    console.log(getCarts);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (userdata) {
      const { user } = userdata;
      if (user) {
        setuserdetails(user);
      }
    } else {
      setuserdetails("");
    }
  }, [userdata, dispatch, userdetails]);

  useEffect(() => {
    const getJerseys = () => {
      dispatch(getCartDetails());
    };
    getJerseys();
  }, []);

  const onLogout = () => {
    dispatch(Logout()).then(() => {
      dispatch(getCartDetails());
    });
  };

  return (
    <div className="bg-[#0c0b0c] bg-red py-4 px-20 flex items-center sticky top-0 z-10">
      {/* <div className=" uppercase text-3xl font-extrabold text-white ">OSJD</div> */}

      <Link to="/">
        <img src="/images/logo4.png" alt="LOGO" className=" w-36  " />
      </Link>

      <ul className=" flex space-x-10 m-auto">
        <Link to="/">
          <li className="uppercase font-bold text-white">sports</li>
        </Link>
        <Link to="/about">
          {" "}
          <li className="uppercase font-bold text-white">about us</li>{" "}
        </Link>
        <Link to="/service">
          <li className="uppercase font-bold text-white">services</li>{" "}
        </Link>
        <Link to="/contact">
          <li className="uppercase font-bold text-white">contacts</li>
        </Link>
      </ul>

      <div className="flex space-x-4">
        {/* <MdSearch className=' text-2xl text-white' /> */}
        <div className="flex">
          {/* <MdAccountCircle className=" text-2xl text-white" /> */}
          {userdetails && (
            <span className="text-white ml-2">{userdetails.username}</span>
          )}
        </div>

        {userdata ? (
          <p className="text-white" onClick={onLogout}>
            Logout
          </p>
        ) : (
          <Link to={"/signin"}>
            <p className="text-white">Sign in</p>
          </Link>
        )}
        <Link to={"/CheckOut"}>
          <div className="relative">
            <BsFillBasket2Fill className="text-white text-[22px]" />
            <div className="-top-3 left-6 absolute  rounded-full w-5 h-5 p-1 bg-white flex justify-center items-center">
              <p className="text-[10px] font-semibold">
                {getCarts?.length || 0}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
