import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function DefaultLayout() {
    
    return (
        <div className='noise bg-white h-screen'>
            <Outlet />
        </div>
    )
}
