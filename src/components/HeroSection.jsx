import React from "react";
import { NavLink } from "react-router-dom";


function HeroSection() {

  

    return (
        <div className="h-fit font-inter   flex flex-col ">
            <div className="h-fit border-b-1  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px] border-gray-800 flex ">
                    <div className=" pl-2  border-gray-800 flex flex-col text-sm">
                        <h1 className="text-8xl tracking-tight text-balance border-gray-800">
                            Effortless Storage Management for the Modern Web
                        </h1>
                    </div>
                </div>
            </div>
            {/* custom div */}
            <div className=" border-b-1 h-10  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px] border-gray-800 flex ">
                    <div className=" pl-2 border-gray-800 flex flex-col text-sm"></div>
                </div>
            </div>
            {/* custom div */}
            <div className=" border-b-1 h-fit  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px] border-gray-800 flex ">
                    <div className=" pl-2 border-gray-800 flex flex-col text-[18px] text-gray-300">
                        <h3 className="line-height-1.5 text-balance backdrop-blur-[2px]">
                        A unified, type-safe, and lightweight solution designed to effortlessly manage
                            <span className="text-sky-500 font-mono">
                                {" "}
                                LocalStorage
                            </span>
                            ,
                            <span className="text-sky-500 font-mono">
                                {" "}
                                SessionStorage
                            </span>
                            , and{" "}
                            <span className="text-sky-500 font-mono">
                                Cookies{" "}
                            </span>
                            ensuring seamless data handling, enhanced performance, and robust security for modern web applications. Simplify storage management with a developer-friendly API built for efficiency and scalability.
                        </h3>
                    </div>
                </div>
            </div>
            <div className=" border-b-1 h-10  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px] border-gray-800 flex ">
                    <div className=" pl-2 border-gray-800 flex flex-col text-sm"></div>
                </div>
            </div>
            <div className=" border-b-1 h-fit  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px] border-gray-800 flex ">
                    <div className=" pl-2  border-gray-800 flex items-center text-base gap-4">
                      <button className="bg-gray-800 px-4 py-2 rounded-full text-[15px] font-medium font-poppins">Get Started</button>
                      <div className="flex text-center rounded-full px-4 py-2 border-1 border-gray-500 bg-gray-900 text-gray-500">Search bar (yet to be implemented)</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
