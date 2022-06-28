import React from 'react'
import {TiInfinityOutline,TiTime,TiFlagOutline} from 'react-icons/ti'
function Provide() {
  return (
      <div>
          <div className='grid grid-cols-3 gap-4 mb-10 px-20 justify-items-center' >
              <div className=''>
          <div className='bg-white drop-shadow-xl w-3/4 h-80 px-10 self-center flex flex-col  rounded-xl pt-10'>
                  <span className=' self-center'>
                      <TiTime className='text-6xl text-white bg-red-900 rounded-full p-4'/>
                      
                  </span> 
                  <h1 className='self-center font-bold mt-6' >Timing</h1> 
                  <h3 className='mt-3'>Change colors, add logos, names, numbers, all at no extra cost . You decide whether to buy one of our designs or create your own special design.</h3>
                  </div>
              </div>
              
<div className=''>
              <div className='bg-white drop-shadow-xl w-3/4 h-80 px-10 self-center flex flex-col item-center rounded-xl pt-10'>
                  <span className=' self-center'>
                      <TiInfinityOutline className='text-6xl text-white bg-blue-900 rounded-full p-4'/>
                      
                  </span> 
                  <h1 className='self-center font-bold mt-6' >Without limits</h1> 
                  <h3 className='mt-3'>Change colors, add logos, names, numbers, all at no extra cost . You decide whether to buy one of our designs or create your own special design.</h3>
                  </div>
                  
                  </div>

              <div className=''>
               <div className='bg-white drop-shadow-xl w-3/4 h-80 px-10 self-center flex flex-col item-center rounded-xl pt-10'>
                  <span className=' self-center'>
                      <TiFlagOutline className='text-6xl text-white bg-yellow-500 rounded-full p-4'/>
                      
                  </span> 
                  <h1 className='self-center font-bold mt-6' >Made in CEYLON</h1> 
                  <h3 className='mt-3'>Change colors, add logos, names, numbers, all at no extra cost . You decide whether to buy one of our designs or create your own special design.</h3>
                  </div>
                  </div>
      
      </div>
    </div>
  )
}

export default Provide