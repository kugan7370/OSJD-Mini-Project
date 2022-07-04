import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, userRegister } from '../Features/User/userSlicer'

function SignUP() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [username, setusername] = useState('')

    const dispatch = useDispatch();

    const onSubmit = () => {
        const user = {
            email,
            password,
            confirmPassword,
            username

        }
        dispatch(userRegister(user))
    }

    return (
        <div className="SignUp ">
            <div className="mt-2 m-auto w-1/4 shadow-xl p-10 ">

                <p className='mb-4 font-medium'>Email</p>
                <input value={email} onChange={e => setemail(e.target.value)} className=' outline-none border-[1px] mb-2 w-full p-2 ' type="text" />

                <p className='mb-4 font-medium'>username</p>
                <input value={username} onChange={e => setusername(e.target.value)} className=' outline-none border-[1px] mb-2 w-full p-2 ' type="text" />

                <p className='mb-4 font-medium'>Password</p>
                <input value={password} onChange={e => setpassword(e.target.value)} className=' outline-none border-[1px] mb-2 w-full p-2 ' type="password" />

                <p className='mb-4 font-medium'>Confirm Password</p>
                <input value={confirmPassword} onChange={e => setconfirmPassword(e.target.value)} className=' outline-none border-[1px] mb-2 w-full p-2 ' type="password" />

                <div onClick={onSubmit} className="p-3 rounded-sm hover:bg-slate-800 text-center bg-black mt-5">
                    <p className=' font-medium text-white '>Sign UP</p>
                </div>

                <div className="mt-2 text-center ">
                    <small >Already have account?
                        <Link to={'/signin'} >
                            <span className='font-bold'>Sign in</span>
                        </Link>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default SignUP