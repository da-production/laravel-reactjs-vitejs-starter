import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import Sidebar from '@/js/views/SideBar'; 
import Header from '@/js/views/Header'; 

export default function AuthenticatedLayout() {
    const {token} = useStateContext()
    console.log(!token ,(token == 'null' || token == null))
    if(!token && (token == 'null' || token == null)){
        return <Navigate to="/login" />
    }
    return (
        <>
            <div className="">
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                    {/* Header */}
                    <Header />
                    {/* ./Header */}

                    {/* Sidebar */}
                    <Sidebar />
                    {/* ./Sidebar */}
                    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                    <Outlet />
                    {/* ./External resources */}
                    </div>
                </div>
            </div>
        </>
    )
}
