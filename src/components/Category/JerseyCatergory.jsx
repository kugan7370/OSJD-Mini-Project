import React, { useState } from 'react'

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { jerseyCatDatas } from '../../Data/JerserCatergory';
function JerseyCatergory() {


    return (
        <div className="jerycatergory px-8 mt-8">
            <div className="grid grid-cols-5 gap-10">
                {jerseyCatDatas.map((jerseyCatData) => (

                    <div key={jerseyCatData.id}>
                        <Link to={`/detail/${jerseyCatData.id}`}>
                            <div className="flex flex-col justify-center items-center  p-4 shadow-xl relative  ">
                                <div className="p-4 w-[180px] h-[220px] ">
                                    <img className='w-full h-full hover:scale-[110%] duration-500' src={jerseyCatData.image} alt="" />
                                </div>
                                <span className='uppercase font-semibold text-center mt-4 '>{jerseyCatData.name}</span>
                                <span className='text-center text-gray-400'>{jerseyCatData.type}</span>
                                {!jerseyCatData.addCard ? <AiOutlineHeart className='absolute top-10 right-6 text-lg text-red-500' /> : <AiFillHeart className='absolute top-10  text-lg text-red-500 right-6' />}
                            </div>
                        </Link>
                        <div className="bg-red-600 hover:bg-red-700  py-3 px-4 flex justify-center items-center">
                            <span className='text-white '>Add Card</span>
                        </div>

                    </div>
                ))}













            </div>
        </div>
    )
}

export default JerseyCatergory