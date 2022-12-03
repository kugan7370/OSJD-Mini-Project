import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { jerseyCatDatas } from "../../Data/JerserCatergory";
import { getJersey } from "../../Features/Admin/GetJerseySlicer";
import { AddCartDetails, getCartDetails } from "../../Features/User/cartSlicer";

function Details() {
  const { id } = useParams();
  const [jerseyDetails, setjerseyDetails] = useState();

  const categoryDatas = useSelector((state) => state.Jerseys.Jerseys);

  useEffect(() => {
    if (categoryDatas) {
      const Jeseydetail = categoryDatas.filter((jersey) => jersey._id == id);
      setjerseyDetails(Jeseydetail);
    }
  }, [id]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [quantity, setquantity] = useState(1);
  const [size, setSize] = useState("");
  const [name, setName] = useState("");
  const [jerseyNo, setJerseyNo] = useState("");

  // const [result, setresult] = useState()

  //   useEffect(() => {
  //     const getJerseys = () => {
  //       dispatch(getCartDetails());
  //     };
  //     getJerseys();
  //   }, [dispatch]);

  const handleSubmit = () => {
    const OrderDetals = {
      jersey_id: jerseyDetails[0]._id,
      price: jerseyDetails[0].price,
      jersey_name: name,
      size,
      jersey_number: jerseyNo,
      jersey_image: jerseyDetails[0].image,
    };
    dispatch(AddCartDetails(OrderDetals)).then(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/signin");
        toast.error("Need to Signin", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
      dispatch(getCartDetails());
    });
    // dispatch(getCartDetails());
  };

  return (
    <div className="item-details p-2 mx-4">
      <div className="grid grid-cols-4 gap-10 ">
        <div className="grid-1 col-span-2 shadow-xl  ">
          <div className="heading bg-black">
            <p className="text-center text-3xl text-white p-5 capitalize ">
              Customize your Jersey
            </p>
          </div>
          <div className=" flex justify-center items-center">
            <div className="image-container p-4 h-[520px] w-[450px] ">
              {jerseyDetails && (
                <img
                  className="w-full h-full bg-contain  hover:scale-[110%] duration-500 object-contain "
                  src={jerseyDetails[0].image}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <div className="grid-2 col-span-2 p-3 ">
          <div className="image-details ">
            <div className="flex flex-col space-y-12">
              {/* title and price */}
              <div className="title">
                <p className="text-4xl font-bold ">J-Mask® Custom</p>
                {jerseyDetails && (
                  <p className="text-4xl font-semibold mt-4">{`$${parseFloat(
                    jerseyDetails[0].price
                  ).toFixed(2)}`}</p>
                )}
              </div>

              <div className="size">
                <p className="mb-4 font-medium">Sizes</p>
                <div className="w-4/5 py-2   border-[1px] ">
                  <select
                    className="w-full px-2 border-none outline-none"
                    name=""
                    id=""
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value="">Choose Size</option>
                    <option value="L">L - Adults (24x16 cm)</option>
                    <option value="M">M - Intermediate (23x14 cm)</option>
                    <option value="S">S - Children (22x12 cm)</option>
                  </select>
                </div>
              </div>

              <div className="Name">
                <p className="mb-4 font-medium">Name</p>
                <div className="w-4/5  mt-4   border-[1px] ">
                  <input
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full outline-none p-2"
                    type="text"
                  />
                </div>
              </div>

              <div className="number ">
                <p className="mb-4 font-medium">Number</p>
                <div className="w-4/5  mt-4   border-[1px] ">
                  <input
                    placeholder="18"
                    value={jerseyNo}
                    onChange={(e) => setJerseyNo(e.target.value)}
                    className="w-full outline-none p-2"
                    type="text"
                  />
                </div>
              </div>

              {/* <div className="number">
                <p className="mb-4 font-medium">Quantity</p>
                <div className="w-4/5  mt-4   border-[1px] ">
                  <div className=" w-full flex items-center justify-around py-2 px-4 ">
                    <GrFormSubtract
                      onClick={() =>
                        setquantity(
                          quantity > 1 ? quantity - 1 : (quantity = 0)
                        )
                      }
                    />
                    <input
                      value={quantity}
                      onChange={(e) => setquantity(e.target.value)}
                      className=" outline-none   text-center"
                      type="text"
                    />
                    <AiOutlinePlus onClick={() => setquantity(quantity + 1)} />
                  </div>
                </div>
              </div> */}

              <div
                onClick={handleSubmit}
                className="p-3   rounded-sm hover:bg-slate-800 text-center bg-black w-4/5"
              >
                <p className=" font-medium text-white ">Add Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
