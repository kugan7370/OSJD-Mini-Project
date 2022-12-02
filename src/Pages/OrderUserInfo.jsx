import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartDetails } from "../Features/User/cartSlicer";
import { AddOrderDetails } from "../Features/User/orderSlicer";

function OrderUserInfo() {
  const getCarts = useSelector((state) => state.cart.carts);

  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [phone, setphone] = useState();
  const [country, setcountry] = useState();
  const [state, setstate] = useState();

  const dispatch = useDispatch();

  const orderSubmit = () => {
    if (getCarts?.length > 0) {
      const orderData = {
        fullname,
        address,
        zipCode,
        phone,
        country,
        state,
        getCarts,
      };
      dispatch(AddOrderDetails(orderData)).then(() => {
        dispatch(getCartDetails());
      });
    }
  };

  return (
    <div className="grid grid-cols-2 gap-10 mt-10">
      {/* image */}
      <div className="flex h-[400px] ">
        <img
          src="./images/delivery2.png"
          className="object-contain w-full h-full"
          alt=""
        />
      </div>
      {/* userInfo */}
      <div className="user-details ">
        <div className="flex flex-col space-y-4 px-10">
          <p className="text-xl font-semibold text-center">
            Delivery Information
          </p>

          {/* name */}
          <div className="Name">
            <p className="font-medium mb-2">Full Name</p>
            <div className="border-[1px] ">
              <input
                placeholder=""
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full outline-none p-2"
                type="text"
              />
            </div>
          </div>
          {/* address */}
          <div className="Address">
            <p className="font-medium mb-2">Address</p>
            <div className="border-[1px] ">
              <input
                placeholder=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full outline-none p-2"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="Phone">
              <p className="font-medium mb-2">Phone Number</p>
              <div className="border-[1px] ">
                <input
                  placeholder=""
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  className="w-full outline-none p-2"
                  type="number"
                />
              </div>
            </div>

            <div className="Country">
              <p className="font-medium mb-2">Country</p>
              <div className=" border-[1px] ">
                <input
                  placeholder=""
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                  className="w-full outline-none p-2"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="State">
              <p className="font-medium mb-2">State</p>
              <div className="border-[1px] ">
                <input
                  placeholder=""
                  value={state}
                  onChange={(e) => setstate(e.target.value)}
                  className="w-full outline-none p-2"
                  type="text"
                />
              </div>
            </div>

            <div className="Zip">
              <p className="font-medium mb-2">Zip Code</p>
              <div className="border-[1px] ">
                <input
                  placeholder=""
                  value={zipCode}
                  onChange={(e) => setzipCode(e.target.value)}
                  className="w-full outline-none p-2"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div
            onClick={orderSubmit}
            className="p-3   rounded-sm hover:bg-slate-800 text-center bg-black"
          >
            <p className=" font-medium text-white ">Place Order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderUserInfo;
