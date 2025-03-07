import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <div className="flex backdrop-blur-[1px] flex-col w-full border-gray-800 text-white font-poppins">
            <div className="h-fit border-y-1  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px] border-gray-800 flex justify-around">
                    <div className=" pl-2 py-10 text-center space-y-3  border-gray-800 flex flex-col text-sm">
                        <h1 className="pb-2 font-semibold">Learn</h1>
                        <NavLink>Documentation</NavLink>
                        <NavLink>Showcase</NavLink>
                        <NavLink>Blog</NavLink>
                    </div>
                    <div className=" h-56 text-center pr-2 py-10 space-y-3  border-gray-800 flex flex-col text-sm">
                        <h1 className="pb-2 font-semibold">Community</h1>
                        <a href="#">Github</a>
                        <a>X</a>
                        <a>LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="h-2/5 border-y-1  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px] border-gray-800 flex justify-between">
                    <div className="pl-2 py-10  border-gray-800 flex flex-col text-sm">
                        leftbox
                    </div>
                    <div className="pr-2 py-10 text-gray-400 ">
                        Copyright © 2025 StorageBuddy. · Trademark Policy
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
