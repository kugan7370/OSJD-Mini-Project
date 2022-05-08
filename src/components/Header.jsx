import React from 'react'

function Header() {
    return (
        <div className='bg-black py-4 px-20 flex'>
            <div className=" uppercase text-3xl font-extrabold text-white ">jersix</div>

            <ul className=' flex space-x-10 m-auto'>
                <li className=' uppercase font-bold text-white'>sports</li>
                <li className=' uppercase font-bold text-white'>about us</li>
                <li className=' uppercase font-bold text-white'>services</li>
                <li className=' uppercase font-bold text-white'>contacts</li>

            </ul>

            <div className=""></div>
        </div>
    )
}

export default Header