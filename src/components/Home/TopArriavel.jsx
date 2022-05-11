import React from 'react'

function TopArriavel() {
  return (
      <div className='flex flex-row justify-center mx-20 space-x-7 mt-10 mb-10'>
          <div className='flex flex-col mt-10'>
              <span className='font-bold text-3xl'>Top New </span>
              <span className='font-bold text-3xl'> Arrivel Products</span>
              <div className='flex hover:bg-[#b93833]  cursor-pointer bg-[#8b2a26] rounded-3xl py-2 px-4 text-white items-center justify-center mt-10 '>
                  <div>See all products</div>
              </div>
          </div>
          <div className="w-1/5 shadow-lg p-5 bg-white " >
              <img src="https://www.pngall.com/wp-content/uploads/5/Red-Jersey.png" className='w-full ' alt='jersy' />
              <div className='flex flex-row justify-between mt-2 '>
                  <span className='font-medium text-sm '>Lactose Legend</span>
                  <span className='font-medium text-md '>$25.03</span>
                  
              </div>
          </div>
          <div className='w-1/5 shadow-lg p-5 bg-white'>
              <img src="https://www.pngall.com/wp-content/uploads/5/Red-Jersey.png" className='w-full' alt='jersy' />
              <div className='flex flex-row justify-between mt-2 '>
                  <span className='font-medium text-sm '>Lactose Legend</span>
                  <span className='font-medium text-md '>$25.03</span>
              </div>
          </div>
          <div className='w-1/5 shadow-lg p-5 bg-white'>
              <img src="https://www.pngall.com/wp-content/uploads/5/Red-Jersey.png" className='w-full' alt='jersy' />
              <div className='flex flex-row justify-between mt-2 '>
                  <span className='font-medium text-sm '>Lactose Legend</span>
                  <span className='font-medium text-md '>$25.03</span>
              </div>
          </div>
          
    </div>
  )
}

export default TopArriavel