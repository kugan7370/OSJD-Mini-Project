import React from 'react'

function SportsCat() {
    return (
        <div>
            <div className='bg-black relative'>
                <img src="/images/cat01.jpg" alt="bgImg" className=' h-[calc(100vh-97.56px)] ' />
                <div className='absolute top-20 right-0 text-white left-1/2 '>
                    <div className=' flex flex-col space-y-7'>
                        <span className='text-lg'>- YOU WANT IT YOU GOT IT</span>
                        <span className='text-7xl font-bold'>Buy Your</span>
                        <span className='text-7xl font-bold '>jersy right now</span>
                        <div className="">
                            <div className='bg-[#ff0c3c] flex rounded-3xl py-2 px-4 w-28 items-center justify-center mt-10'>
                                <div className=''>BUY NOW</div>
                                {/* #8b2a26 */}
                            </div>
                        </div>


                    </div>


                </div>
            </div>

        </div>
    )
}

export default SportsCat