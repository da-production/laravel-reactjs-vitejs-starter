
import { useReducer, useRef, useState } from "react";
import { Icons } from "../components/Icons.jsx";
import useLogin from "../hooks/useLogin.js";
import useLocalStorage from "../hooks/useLocalStorage.js";
import { redirect } from "react-router-dom";
import post from "../axiosClient/post.js";

export default function Login() {
    const {errors,handlePost}    = post();
    const email             = useRef('');
    const password          = useRef('');
    const [isLoading,setIsLoading]         = useState(false);
    const handleLogin = async (e) =>{
        setIsLoading(true)
        e.preventDefault()
        await handlePost('/login',{email:email.current.value,password:password.current.value});
        setIsLoading(false)
    }
    return <>
            <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">
                Login To Your Account
                </div>
                <button className="relative mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                <span className="absolute left-0 top-0 flex items-center justify-center h-full w-10 text-blue-500">
                    <i className="fab fa-facebook-f" />
                </span>
                <span>Login with Facebook</span>
                </button>
                <div className="relative mt-10 h-px bg-gray-300">
                <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
                    <span className="bg-white px-4 text-xs text-gray-500 uppercase">
                    Or Login With Email
                    </span>
                </div>
                </div>
                <div className="mt-10">
                <div className={`${errors?.message? "block" : "hidden"} p-3 text-xs rounded-lg mb-3 bg-red-200 border border-red-400 text-red-600`}>
                    <p>{errors?.message}</p>
                </div>
                <form onSubmit={handleLogin}>
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
                            className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                            placeholder="Password"
                            />
                        </div>
                        {
                            errors?.password && <p className="text-xs mt-2 text-red-600">{errors.password}</p>
                        }
                    </div>
                    <div className="flex items-center mb-6 -mt-4">
                    <div className="flex ml-auto">
                        <a
                        href="#"
                        className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700"
                        >
                        Forgot Your Password?
                        </a>
                    </div>
                    </div>
                    <div className="flex w-full">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className={`${isLoading ? 'bg-blue-200 hover:bg-blue-300 ':'bg-blue-600 hover:bg-blue-700 '} flex items-center justify-center focus:outline-none text-white text-sm sm:text-base rounded py-2 w-full transition duration-150 ease-in`}
                    >
                        <span className="mr-2 uppercase">Login</span>
                        <span>
                            {
                                isLoading? (<Icons.spinner className="h-6 w-6" />) : (<Icons.rightArrow className="h-6 w-6" />)
                            }
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
                    <span className="ml-2">You don't have an account?</span>
                </a>
                </div>
            </div>
    </>
}