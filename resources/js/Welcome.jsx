import Bbburst from "./Demo/Bbburst";
import Oooscillate from "./Demo/Oooscillate";
import Cccoil from "./Demo/Cccoil";
import { Link } from "react-router-dom";
import Ffflurry from "./Demo/Ffflurry";
import { Icons } from "./components/Icons";
import { motion } from "framer-motion";
import { useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
export default function Welcome() {
    const COLORS = ['#13FFAA','#581845','#0073FF','#DD335C']
    const color = useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})
    `;
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
    const rotate = useMotionValue('0deg')
    const rotation = useMotionTemplate`
    rotateZ(${rotate})
    `;
    useEffect(()=>{
        animate(color,COLORS,{
            ease: 'linear',
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })

        animate(rotate,['0deg','360deg'],{
            ease: 'linear',
            duration: 5,
            repeat: Infinity,
        })

    },[]);
    return <>
        <motion.section className="h-screen" 
            style={{
                backgroundImage
            }}>
            <div className="absolute top-24 left-[55%] translate-x-[-65%] w-96 h-32 overflow-hidden scale-150" >
                <div className="absolute w-40 left-24 -top-[95px]  h-32 bg-gradient-to-r  from-[#5b76ff]  to-[#00fff2] lighting"></div>
                
                <div className="relative w-32 left-28 -top-12 blur-xl h-full bg-gradient-to-r  from-[#5b76ff]  to-[#00fff2] lighting"></div>
            </div>
            <nav className="font-sans left-[50%] translate-x-[-50%] max-w-5xl absolute top-0 z-20 flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6  sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0 inner">

                    <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold text-white">Laravel</a><br />
                    <span className="text-xs text-grey-dark text-white">v10.10 (PHP v^8.1)</span>

                </div>

                <div className="sm:mb-0 self-center flex justify-end">
                    <Link to="/login" className="flex items-center p-2  text-white  rounded-full">
                        Login
                        
                    </Link>
                    <Link to="/login" className="flex items-center p-2  text-white  rounded-full">
                        Register
                    </Link>
                </div>
            </nav>
            <div className="w-72 h-72 bg-[#1b2556] absolute top-0 left-0 rounded-full blur-[100px] skew-x-12 skew-y-12"></div>
            <div className="w-72 h-72 bg-[#1b5653] absolute top-0 right-10 rounded-full blur-[100px] -skew-x-12 -skew-y-12"></div>
            <div className="flex flex-col items-center justify-start  py-2  pt-24 relative z-10 " >
                <div className="flex flex-col items-center space-y-8 w-full">
                    
                    <Oooscillate className="absolute -top-10 w-full h-full" />
                    <h3 className="mb-4 text-center text-3xl font-bold  leading-none tracking-tight text-gray-100 overflow-hidden rounded-full p-[1px] bg-gradient-to-r  from-red-400 via-[#0b0c11] to-green-400">
                        <span className="bg-gradient-to-r  from-slate-800 via-[#0b0c11] to-[#0b0c11] block rounded-full p-3">Accelerate Your Laravel Development</span>
                    </h3>
                    <p className="mb-6 text-center  font-normal text-gray-100  sm:px-16 dark:text-gray-400">
                        Create stunining professional-quality web apps in record time with our powerfull starter kit.
                    </p>
                    <div className="logos  flex flex-row  gap-14 justify-between ">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <a href="https://laravel.com" className="relative transition-all duration-300 group overflow-hidden flex justify-center items-center rounded-3xl hover:shadow-[0_-55px_80px_-55px_#451212] shadow-[0_-35px_80px_-55px_#451212] p-20 bg-[#11131e]/50 backdrop-blur-sm " target="_blank" rel="noreferrer">
                            <div className="absolute top-0 opacity-30 -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                            ></div>
                                <div className=" transition-transform duration-200 group-hover:scale-110 relative z-10 rounded-full bg-gradient-to-b from-[#ff0000] to-[#ff8000]  skew-x-1 skew-y-1">
                                    <div className="p-5 flex flex-center items-center -skew-x-1 -skew-y-1 rounded-full bg-gradient-to-b from-[#10101a] to-[#211a48]">
                                        <img src="/assets/images/logos/laravel.png" className="w-16 h-16 " />
                                    </div>
                                </div>
                                <Cccoil className="absolute top-0 left-0 "/>
                                <div className="transition-all duration-200 group-hover:scale-110 group-hover:bg-[#42348f] absolute blur-2xl w-28 h-28 bg-[#451212] rounded-full z-0"></div>
                                {/* <div className="transition-transform duration-200 group-hover:scale-90 absolute w-44 h-44 border border-[#2c2459] rounded-full z-1"></div>
                                <div className="transition-transform duration-200 group-hover:scale-90 absolute w-72 h-72 border border-[#2c2459] rounded-full z-1"></div> */}
                            </a>
                        </motion.div>
                        <motion.a
                            whileHover={{ scale: 1.05, rotate: 360 ,borderRadius: "100%" }}
                            transition={{ type: "spring", stiffness: 400, damping: 15}}
                            href="https://vitejs.dev/" className="relative  group overflow-hidden flex justify-center items-center rounded-3xl hover:shadow-[0_-55px_80px_-55px_#4f40a6] shadow-[0_-35px_80px_-55px_#4f40a6] p-20 bg-[#11131e]/50 backdrop-blur-sm " target="_blank" rel="noreferrer"
                        >
                            <div className="absolute top-0 opacity-30 -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                            ></div>
                            <div className="transition-transform duration-200 group-hover:scale-110  relative z-10 rounded-full bg-gradient-to-b from-sky-500 to-lime-400 skew-x-1 skew-y-1">
                                <div className="p-5 flex flex-center items-center -skew-x-1 -skew-y-1 rounded-full bg-gradient-to-b from-[#10101a] to-[#211a48]">
                                    <img src="/assets/images/logos/vitejs.svg" className="w-16 h-16 " />
                                </div>
                            </div>
                            <div className="transition-all duration-200 group-hover:scale-110 group-hover:bg-[#472348] absolute blur-2xl w-28 h-28 bg-[#4f40a6] rounded-full z-0"></div>
                            <div className="absolute w-44 h-44 border border-[#2c2459] rounded-full z-1"></div>
                            <div className="absolute w-72 h-72 border border-[#2c2459] rounded-full z-1"></div>
                        </motion.a>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                        <a href="https://react.dev/" className="relative transition-all duration-300 group overflow-hidden flex justify-center items-center rounded-3xl hover:shadow-[0_-55px_80px_-55px_#005eff] shadow-[0_-35px_80px_-55px_#005eff] p-20 bg-[#11131e]/50 backdrop-blur-sm " target="_blank" rel="noreferrer">
                            <div className="absolute top-0 opacity-30 -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                            ></div>
                            <div className="transition-transform duration-200 group-hover:scale-110  relative z-10 rounded-full bg-gradient-to-b from-[#005eff] to-[#005eff] skew-x-1 skew-y-1">
                                <div className="p-5 flex flex-center items-center -skew-x-1 -skew-y-1 rounded-full bg-gradient-to-b from-[#10101a] to-[#211a48]">
                                    <img src="/assets/images/logos/reactjs.png" className="w-16 h-16 " />
                                </div>
                            </div>
                            <Ffflurry className="absolute top-0 left-0 "/>
                            <div className="transition-all duration-200 group-hover:scale-110 group-hover:bg-[#42348f] absolute blur-2xl w-28 h-28 bg-[#274f93] rounded-full z-0"></div>
                            {/* <div className="absolute w-44 h-44 border border-[#274f93] rounded-full z-1"></div>
                            <div className="absolute w-72 h-72 border border-[#274f93] rounded-full z-1"></div> */}
                        </a>
                        </motion.div>
                    </div>
                    <motion.a
                        style={{
                            border,
                            boxShadow
                        }}
                        href="https://github.com/da-production/laravel-reactjs-vitejs-starter" className=" bg-[#1b2556] flex z-10 flex-nowrap items-center justify-center text-base font-medium text-center text-blue-700 p-0.5  rounded-full overflow-hidden relative ">
                        
                        <div className="p-0.5   bg-[#0b0c11] rounded-full">
                        
                            <div className="flex relative z-10 items-center p-2 bg-gradient-to-r from-[#2a075c] text-white to-[#190c2f] rounded-full">
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
                            </div>
                            
                            <motion.div style={{transform: rotation}} className="h-52 w-10 absolute -top-10 left-[50%] -translate-x-[50%] bg-blue-100 z-0 mix-blend-overlay"></motion.div>
                        </div>
                    </motion.a>
                    <p className="text-center text-sm text-gray-100 mt-10">
                        Was Made By <a href="https://github.com/da-production" target="_blank" rel="noreferrer" className="font-bold">Mebrouki M.Amine</a> With <Icons.heart className="w-4 h-4 inline-block text-red-500"/>
                    </p>
                </div>
            </div>
        </motion.section>
        {/* <div className="w-72 h-72 bg-teal-400 fixed -bottom-40 left-[calc(50%-400px)]  rounded-full blur-3xl "></div>
        <div className="w-72 h-72 bg-purple-400 fixed -bottom-40 right-[calc(50%-350px)]  rounded-full blur-3xl "></div>
        <div className="w-72 h-72 bg-pink-300 fixed -bottom-32 left-[calc(50%-150px)]  rounded-full blur-3xl "></div> */}
    </>
}