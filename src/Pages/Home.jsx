import React from "react";
import SportsCat from "../components/Home/SportsCat";
import TopArriavel from "../components/Home/TopArriavel";
import SportsCategory from "../components/Category/SportsCategory";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCartDetails } from "../Features/User/cartSlicer";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getJerseys = () => {
      dispatch(getCartDetails());
    };
    getJerseys();
  }, []);
  return (
    <>
      <SportsCat />
      <TopArriavel />
      <SportsCategory />
    </>
  );
}

export default Home;
