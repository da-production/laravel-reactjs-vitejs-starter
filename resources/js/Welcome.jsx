export default function Welcome() {
    return <>
        <div className="flex flex-col items-center justify-start  py-2  mt-32">
            <div className="flex flex-col items-center space-y-8 max-w-3xl">
                <div className="logos  flex w-fit gap-14 justify-center ">
                    <a href="https://laravel.com" className="flex justify-center items-center rounded-full shadow-lg p-5 bg-white border-2 border-slate-400" target="_blank" rel="noreferrer">
                        <img src="/assets/images/logos/laravel.png" className="w-16 h-16" />
                    </a>
                    <a href="https://vitejs.dev/" className="flex justify-center items-center rounded-full shadow-lg p-5 bg-white border-2 border-slate-400"  target="_blank" rel="noreferrer">
                        <img src="/assets/images/logos/vitejs.svg" className="w-16 h-16" />
                    </a>
                    <a href="https://react.dev/" className="flex justify-center items-center rounded-full shadow-lg p-5 bg-white border-2 border-slate-400"  target="_blank" rel="noreferrer">
                        <img src="/assets/images/logos/reactjs.png" className="w-16 h-16" />
                    </a>
                </div>
                <h3 className="mb-4 text-center text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                Accelerate Your Laravel Development: Introducing a Seamless Integration of ReactJS and Vite JS
                </h3>
                <p className="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">
                Experience the power of streamlined Laravel development with our all-inclusive starter kit. Seamlessly integrating ReactJS for dynamic frontend interactions and Vite JS for lightning-fast build times, this kit empowers developers to craft robust web applications with unparalleled efficiency. Say goodbye to setup hassles and hello to rapid prototyping and deployment. Elevate your projects with the perfect blend of Laravel, ReactJS, and Vite JS.
                </p>
                <a href="https://github.com/da-production/laravel-reactjs-vitejs-starter" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-blue-700 bg-white border-2 shadow-lg rounded-lg  ">
                    Learn more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        aria-hidden="true"
                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </>
}