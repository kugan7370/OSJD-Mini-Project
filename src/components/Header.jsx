import React, { useEffect } from "react";
import { useState } from "react";
import { MdSearch, MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isUser, Logout } from "../Features/User/userSlicer";

function Header() {
  const [userdetails, setuserdetails] = useState("");

  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.users.user);
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

  const onLogout = () => {
    dispatch(Logout());
  };

  return (
    <div className="bg-[#0c0b0c] bg-red py-4 px-20 flex items-center">
      {/* <div className=" uppercase text-3xl font-extrabold text-white ">OSJD</div> */}
      {!userdetails ? (
        <img src="/images/logo4.png" alt="LOGO" className=" w-36  " />
      ) : (
        <Link to="/">
          <img src="/images/logo4.png" alt="LOGO" className=" w-36  " />
        </Link>
      )}
      {userdetails && (
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
      )}

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
          <h1 className="text-white text-2xl px-[240px]">
            Welcome To Online Jersey Shoping
          </h1>
        )}
      </div>
    </div>
  );
}

export default Header;
