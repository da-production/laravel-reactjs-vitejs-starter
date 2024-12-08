import { useRef, useState } from "react";
import { Icons } from "../components/Icons.jsx";
import useSignup from "../hooks/useSignup.js";
import { Link } from "react-router-dom";
export default function Signup() {

    const name = useRef('');
    const email = useRef('');
    const password = useRef('');
    
    const {errors,signup} = useSignup();

    const handleSignup = async (ev) =>{
        ev.preventDefault()
        await signup({
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
        })
    }
    return <>
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
                Signup
                </div>
                <div className="mt-10">
                <form onSubmit={handleSignup} >
                    <div className="flex flex-col mb-6">
                        <label
                            htmlFor="name"
                            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                        >
                            Name:
                        </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <Icons.email className="h-6 w-6" />
                            </div>
                            <input
                                ref={name}
                                id="name"
                                type="text"
                                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="Full Name"
                            />
                        </div>
                        {
                            errors?.name && <p className="text-xs mt-2 text-red-600">{errors.name}</p>
                        }
                        
                    </div>
                    <div className="flex flex-col mb-6">
                        <label
                            htmlFor="email"
                            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                        >
                            E-Mail Address:
                        </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <Icons.email className="h-6 w-6" />
                            </div>
                            <input
                                ref={email}
                                id="email"
                                type="email"
                                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                                placeholder="E-Mail Address"
                            />
                        </div>
                        {
                            errors?.email && <p className="text-xs mt-2 text-red-600">{errors.email}</p>
                        }
                    </div>
                    <div className="flex flex-col mb-6">
                        <label
                            htmlFor="password"
                            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                        >
                            Password:
                        </label>
                        <div className="relative">
                            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                            <span>
                                <Icons.lock className="h-6 w-6" />
                            </span>
                            </div>
                            <input
                                ref={password}
                            id="password"
                            type="password"
                            name="password"
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                            placeholder="Password"
                            />
                        </div>
                        {
                            errors?.password && <p className="text-xs mt-2 text-red-600">{errors.password}</p>
                        }
                    </div>
                    <div className="flex items-center mb-6 -mt-4">
                    </div>
                    <div className="flex w-full">
                    <button
                        type="submit"
                        className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
                    >
                        <span className="mr-2 uppercase">Signup</span>
                        <span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        </span>
                    </button>
                    </div>
                </form>
                </div>
                <div className="flex justify-center items-center mt-6">
                <a
                    href="#"
                    target="_blank"
                    className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center"
                >
                    <span>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    </span>
                    <Link to='/login' className="ml-2">Login ?</Link>
                </a>
                </div>
            </div>
    </>
}