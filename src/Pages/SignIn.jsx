import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, isUser, Logout } from '../Features/User/userSlicer'
import { useEffect } from 'react'

function SignIn() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')


  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.users.user)

  const navigation = useNavigate()

  useEffect(() => {
    if (!userdata) {
      dispatch(isUser())
    }


  }, [userdata])




  useEffect(() => {
    if (userdata) {
      const { token, user } = userdata

      if (user && token) {
        // console.log(user);
        navigation('/')
      }
    }

  }, [userdata])

  const onSubmit = (e) => {
    e.preventDefault()
    const user = {
      email,
      password,
    }
    dispatch(fetchUser(user))

  }


  return (
    <div className="login">
      <div className="mt-10 m-auto w-1/4 shadow-xl p-10">
        <form>
          <p className='mb-4 font-medium'>Email</p>
          <input value={email} onChange={e => setemail(e.target.value)} className=' outline-none border-[1px] mb-2 w-full p-2 ' type="text" />

          <p className='mb-4 font-medium'>Password</p>
          <input value={password} onChange={e => setpassword(e.target.value)} className=' outline-none border-[1px] mb-2 w-full p-2 ' type="password" />

          <div onClick={onSubmit} className="p-3 rounded-sm hover:bg-slate-800 text-center bg-black mt-5">
            <p className=' font-medium text-white '>Sign In</p>
          </div>


          <div className="mt-2 text-center ">
            <small >don't you have account?
              <Link to={'/signup'} >
                <span className='font-bold'>Sign up</span>
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn