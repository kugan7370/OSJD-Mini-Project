import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct/CartProduct";

function Cart() {
  const getCarts = useSelector((state) => state.cart.carts);
  //   const [getPriceList, setgetPriceList] = useState();
  const [subTotal, setsubTotal] = useState(0.0);
  useEffect(() => {
    if (getCarts?.length > 0) {
      let priceList = [];
      getCarts.map((item) => {
        priceList.push(item.price);
      });
      console.log(priceList);
      setsubTotal(parseFloat(priceList.reduce((a, b) => a + b)).toFixed(2));
    }
  }, [getCarts]);

  return (
    <div className="w-full grid grid-cols-3 gap-5 p-10 mt-[20px]">
      {/* cart items */}
      <div className="flex flex-col col-span-2 ">
        {getCarts &&
          getCarts.map((cartItem) => (
            <CartProduct cartItem={cartItem} key={cartItem._id} />
          ))}
      </div>
      {/* checkout */}
      {getCarts && (
        <div className="  h-[300px] sticky top-[160px]">
          <div className="flex flex-col space-y-3 border-[1px]  border-gray-200">
            <div className="flex justify-between px-6 border-b-[1px] py-3">
              <p className="text-xl ">Sub Total :</p>
              <p className="text-xl ">{subTotal} </p>
            </div>
            <div className="flex justify-between px-6 border-b-[1px] py-3">
              <p className="text-xl ">Total Count :</p>
              <p className="text-xl ">{getCarts?.length}</p>
            </div>
            <div className="flex justify-between px-6 border-b-[1px] py-3">
              <p className="text-xl ">Shipping :</p>
              <p className="text-xl ">00.00</p>
            </div>
            <div className="flex justify-between px-6  py-3">
              <p className="text-xl  font-semibold">Grand Total :</p>
              <p className="text-xl font-semibold">{subTotal}</p>
            </div>
          </div>

          <Link to={"/userOrderInfo"}>
            <div className="p-3 mt-2 rounded-sm hover:bg-slate-800 text-center bg-black">
              <p className=" font-medium text-white ">Check Out</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
