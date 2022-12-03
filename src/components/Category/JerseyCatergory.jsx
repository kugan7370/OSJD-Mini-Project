import React, { useEffect, useState } from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { jerseyCatDatas } from "../../Data/JerserCatergory";
import { getJersey } from "../../Features/Admin/GetJerseySlicer";
function JerseyCatergory() {
  const { id } = useParams();
  const [jerseyDetails, setjerseyDetails] = useState();

  const categoryDatas = useSelector((state) => state.Jerseys.Jerseys);

  const dispatch = useDispatch();

  useEffect(() => {
    const getJerseys = () => {
      dispatch(getJersey());
    };
    getJerseys();
  }, []);

  useEffect(() => {
    if (categoryDatas) {
      const Jeseydetail = categoryDatas.filter(
        (jersey) => jersey.category_id == id
      );
      setjerseyDetails(Jeseydetail);
    }
  }, []);

  return (
    <div className="jerycatergory px-8 mt-8">
      <div className="grid grid-cols-5 gap-10">
        {jerseyDetails &&
          jerseyDetails?.map((jerseyDetail) => (
            <div key={jerseyDetail?._id}>
              <Link to={`/detail/Order/${jerseyDetail?._id}`}>
                <div className="flex flex-col justify-center items-center  p-4 shadow-xl relative  ">
                  <div className="p-4 w-[180px] h-[220px] ">
                    <img
                      className="w-full h-full hover:scale-[110%] duration-500"
                      src={jerseyDetail?.image}
                      alt=""
                    />
                  </div>
                  <span className="uppercase font-semibold text-center mt-4 ">
                    {jerseyDetail.type}
                  </span>
                  <span className="text-center text-gray-400">{`$${parseFloat(
                    jerseyDetail?.price
                  ).toFixed(2)}`}</span>
                  {/* {!jerseyCatData.addCard ? <AiOutlineHeart className='absolute top-10 right-6 text-lg text-red-500' /> : <AiFillHeart className='absolute top-10  text-lg text-red-500 right-6' />} */}
                </div>
              </Link>
              <Link to={`/detail/Order/${jerseyDetail?._id}`}>
                <div className="bg-red-600 hover:bg-red-700  py-3 px-4 flex justify-center items-center">
                  <span className="text-white ">Add Card</span>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default JerseyCatergory;
