import React from 'react'
import { sports } from '../../Data/Sports'

function SportsCategory() {
    return (
        <div className="sports cards pt-10 px-8 pb-10 bg-[#171717]">
            <div className="text-center">
                <p className='text-6xl font-bold text-white'>Create your uniform</p>
                <div className=" mb-10 mt-8">
                    <p className='mb-4 text-xl text-gray-500'>Creating custom uniforms is child's play!</p>
                    <p className='text-lg text-gray-500'>Pick one sport and view all the products, find the one that suits you and customize it directly with the Configurator Online</p>
                </div>

            </div>
            <div className="grid grid-cols-4 gap-10">
                {sports.map((sport) => (
                    <div className="shadow-xl rounded-2xl overflow-hidden relative  ">
                        <div className="h-[220px] ">
                            <img className='w-full h-full  bg-contain   hover:scale-[110%]  duration-500' src={sport.image} alt="" />
                        </div>
                        <div className='hover:bg-black/60 duration-500'>
                        <span className=' w-full h-full font-semibold text-white text-2xl absolute top-1/2 right-0 left-0 text-center ' >{sport.name}</span>
                    
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SportsCategory