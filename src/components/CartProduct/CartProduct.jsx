import React from "react";
import { useDispatch } from "react-redux";
import {
  getCartDetails,
  removeCartDetails,
} from "../../Features/User/cartSlicer";
const image1 =
  "https://img.freepik.com/free-vector/soccer-jersey-template-sport-t-shirt-design_29096-1299.jpg?w=2000";
function CartProduct({ cartItem }) {
  const dispatch = useDispatch();

  let jerseyPrice;
  if (cartItem) {
    jerseyPrice = parseFloat(cartItem.price).toFixed(2);
  }

  const handleRemove = () => {
    console.log("clicked");
    dispatch(removeCartDetails(cartItem._id)).then(() => {
      dispatch(getCartDetails());
    });
  };

  return (
    <div className="border-[1px] border-gray-200 w-full">
      <div className="grid grid-cols-12 gap-4 items-center">
        {/* image */}
        <div className="col-span-3">
          <div className="h-60 w-50 p-4">
            <img
              src={cartItem.jersey_image}
              className="w-full h-full object-contain"
              alt="images"
            />
          </div>
        </div>
        {/* details */}
        <div className="w-full col-span-3">
          <div className="flex-col gap-4 justify-center items-center">
            <p>Name : {cartItem.jersey_name}</p>
            <p>Size : {cartItem.size}</p>
            <p>Number : {cartItem.jersey_number}</p>
          </div>
        </div>

        {/* price */}
        <div className="flex justify-center items-center col-span-3">
          <p>${jerseyPrice}</p>
        </div>
        {/* remove */}
        <div className="flex justify-center items-center  col-span-3">
          <div
            className="py-1 px-4 rounded-md bg-black cursor-pointer"
            onClick={handleRemove}
          >
            <p className="text-white">Remove</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
