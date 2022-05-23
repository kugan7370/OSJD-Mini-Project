import React, { useEffect, useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract } from "react-icons/gr";
import { useParams } from 'react-router-dom';
import { jerseyCatDatas } from '../../Data/JerserCatergory';
function Details() {
    const [quantity, setquantity] = useState(1)
    const { id } = useParams();
    const [result, setresult] = useState()
    useEffect(() => {
        setresult(jerseyCatDatas.filter((jerseyCatData) => jerseyCatData.id == id))
        console.log(jerseyCatDatas.filter((jerseyCatData) => jerseyCatData.id == id));
    }, [id])








    return (
        <div className="item-details p-4 mt-10 mx-4">
            <div className="grid grid-cols-3 gap-10 ">

                <div className="grid-1 col-span-2 shadow-xl  ">
                    <div className="heading bg-black">
                        <p className='text-center text-4xl text-white p-6 capitalize '>Customize your Jersey</p>
                    </div>
                    <div className=" flex justify-center items-center">
                        <div className="image-container p-10 h-[520px] w-[450px] ">
                            {result && <img className='w-full h-full bg-contain hover:scale-[110%] ' src={result[0].image} alt="" />}
                        </div>
                    </div>
                </div>
                <div className="grid-2 ">
                    <div className="image-details mt-20">
                        <div className="flex flex-col space-y-8">
                            {/* title and price */}
                            <div className='title'>
                                <p className='text-4xl font-bold '>J-Mask® Custom</p>
                                <p className='text-4xl font-semibold mt-4'>7,78€</p>
                            </div>

                            <div className="size">
                                <p className='mb-4 font-medium'>Sizes</p>
                                <div className="w-4/5 py-2   border-[1px] ">
                                    <select className='w-full px-2 border-none outline-none' name="" id="">
                                        <option value="">Choose Size</option>
                                        <option value="L">L - Adults (24x16 cm)</option>
                                        <option value="M">M - Intermediate (23x14 cm)</option>
                                        <option value="S">S - Children (22x12 cm)</option>
                                    </select>
                                </div>
                            </div>



                            <div className="number">
                                <p className='mb-4 font-medium'>Number</p>
                                <div className="w-4/5  mt-4   border-[1px] ">
                                    <input placeholder='18' className='w-full outline-none p-2' type="text" />
                                </div>
                            </div>

                            <div className="number">
                                <p className='mb-4 font-medium'>Quantity</p>
                                <div className="w-4/5  mt-4   border-[1px] ">
                                    <div className=" w-full flex items-center justify-around py-2 px-4 ">
                                        <GrFormSubtract onClick={() => setquantity(quantity > 1 ? quantity - 1 : quantity = 0)} />
                                        <input value={quantity} onChange={e => setquantity(e.target.value)} className=' outline-none   text-center' type="text" />
                                        <AiOutlinePlus onClick={() => setquantity(quantity + 1)} />
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 rounded-sm hover:bg-slate-800 text-center bg-black w-4/5">
                                <p className=' font-medium text-white '>Submit</p>
                            </div>




                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details