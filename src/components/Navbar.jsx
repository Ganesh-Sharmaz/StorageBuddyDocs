import React from "react";
import githubsvg from "../assets/github-142-svgrepo-com.png";

function Navbar() {
    return (
        <div className=" z-50 flex w-full items-center fixed justify-between text-white font-poppins h-14 backdrop-blur-[2px] px-6 border-b-[1px] border-[#1a1a1a]">
            <div className="text-xl tracking-tighter">storagebuddy</div>
            <div className="text-sm flex space-x-4">
                <button className="cursor-pointer">Docs</button>
                <button className="cursor-pointer">Blog</button>
                <button className="cursor-pointer">Showcase</button>
                <button className="cursor-pointer"><img className="w-5" src={githubsvg} alt="" /></button>
            </div>
        </div>
    );
}

export default Navbar;
