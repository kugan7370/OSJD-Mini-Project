import React from 'react'

function SportsCat() {
  return (
      <div>
          <div className='bg-black relative'>
              <img src="/images/cat01.jpg" alt="bgImg" className=' h-[calc(100vh-97.56px)] ' />
              <div className='absolute top-20 right-0 text-white left-1/2 '>
                  <div className=' flex flex-col space-y-5'>
                      <span className='text-lg'>- YOU WANT IT YOU GOT IT</span>
                      <span className='text-7xl font-bold'>Buy Your</span>
                      <span className='text-7xl font-bold '>jersy right now</span>
                      <div>
                          <div className='bg-[#ff0c3c] rounded-3xl w-24 p-2 mt-10'>BUY NOW</div>
                          {/* #8b2a26 */}
                      </div>
                      
                  </div>

                  
              </div>
          </div>

    </div>
  )
}

export default SportsCat