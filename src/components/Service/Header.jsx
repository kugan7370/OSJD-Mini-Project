import React from 'react'

function Header() {
  return (
      <div className='h-[calc(100vh-97.56px)] w-full w-screen overflow-hidden'>
          {/* <img className='h-1/2  bg-contain' source="/images/tshirt-service.png" alt="bg img"/> */}
          <img src="/images/bg-service.jpg" alt="bgImg" className=' h-full bg-contain w-full' />
          <div className=' grid grid-cols-2 top-36 absolute right-0 left-0 w-full mt-10 h-[calc(100vh-97.56px)] overflow-hidden'>
              <div className='flex flex-col space-y-3 pt-28 items-start ml-44'>
                  <h1 className='  font-semibold text-black text-md text-center ' >CUSTOM TEAMWARE</h1>
                  <h1 className='  font-semibold text-black text-8xl text-center ' >Choose a </h1>
                  <h1 className='  font-semibold text-black text-8xl text-center ' >Sport </h1>
                  <div className="text-center">
                  <h1 className='border-2  border-black text-md cursor-pointer p-2 font-medium rounded-3xl w-32 mt-10 hover:bg-black hover:text-white'>START HERE</h1>
              </div>
              </div>
              <div className=''>      
                  <img src='/images/tshirt-service.png' className='ml-20 w-1/3 absolute' alt="lsdm" />
              </div>

              
             
          </div>
    </div>
  )
}

export default Header
