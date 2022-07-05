import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
function ProtectedRoutes({ children }) {

    const userdata = useSelector((state) => state.users)
    const navigation = useNavigate()
    // console.log(userdata);

    useEffect(() => {
        if (userdata) {

            if (!userdata.user) {
                navigation('/signin')
            }


        }

    }, [userdata])


    return children;
}
export default ProtectedRoutes