import React from 'react'
import LeftSideBarLink from '../components/LeftSideBarLink'
import { Icons } from '../components/Icons'

export default function SideBar() {
  return (
    <>
        <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-gray-200 dark:bg-gray-900 h-full text-slate-800 transition-all duration-300 border-none z-10 sidebar">
            <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-slate-900 uppercase">
                            Main
                        </div>
                    </div>
                </li>
                <LeftSideBarLink icon='home' title="dashboard" to='#'>
                    <Icons.home className="w-5 h-5" />
                </LeftSideBarLink>
                <LeftSideBarLink icon='board' title="board" to='#'>
                    <Icons.board className="w-5 h-5" />
                </LeftSideBarLink>
                
                <li>
                    <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                    <span className="inline-flex justify-center items-center ml-4">
                        <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                        </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                        Messages
                    </span>
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                    <span className="inline-flex justify-center items-center ml-4">
                        <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                        </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                        Notifications
                    </span>
                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">
                        1.2k
                    </span>
                    </a>
                </li>
                <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center mt-5 h-8">
                    <div className="text-sm font-light tracking-wide text-slate-900 uppercase">
                        Settings
                    </div>
                    </div>
                </li>
                <li>
                    <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                    <span className="inline-flex justify-center items-center ml-4">
                        <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                        </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                        Profile
                    </span>
                    </a>
                </li>
                <li>
                    <a
                    href="#"
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                    <span className="inline-flex justify-center items-center ml-4">
                        <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                        Settings
                    </span>
                    </a>
                </li>
                </ul>
                <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
                Copyright @2021
                </p>
            </div>
        </div>
    </>
  )
}
