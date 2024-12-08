import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

export default function GuestLayout() {
    const {token} = useStateContext();
    if(token != null && token != 'null') return <Navigate to="/dashboard" />
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
            <Outlet />
        </div>
    )
}
