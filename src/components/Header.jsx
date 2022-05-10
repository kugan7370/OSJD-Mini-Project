import React from 'react'
import { MdSearch, MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className='bg-[#000000] bg-red py-4 px-20 flex items-center'>
            {/* <div className=" uppercase text-3xl font-extrabold text-white ">OSJD</div> */}
            <img src="/images/osjd_logo.png" alt="LOGO" className=' w-36  ' />

            <ul className=' flex space-x-10 m-auto'>
                <Link to="/"><li className='uppercase font-bold text-white'>sports</li></Link>
                <Link to='/Catgorary'> <li className='uppercase font-bold text-white'>about us</li> </Link>
                <Link to='/service'><li className='uppercase font-bold text-white'>services</li> </Link>
                <Link to='/contact'><li className='uppercase font-bold text-white'>contacts</li></Link>
                <Link to='/signIn' className='uppercase font-bold text-white'>SignIn</Link>

            </ul>

            <div className="flex space-x-4">
                <MdSearch className=' text-2xl text-white' />
                <MdAccountCircle className=' text-2xl text-white' />
            </div>
        </div>
    )
}

export default Header