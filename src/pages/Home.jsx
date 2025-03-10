import React from "react";
import HeroSection from "../components/HeroSection";
import Codeblock from "../components/Codeblock";
import useTypingEffect from "../hooks/useTypingEffect";
import Carousel from "../components/Carousel";

function Home() {
    const text = useTypingEffect([
        "Type-Safe & Lightweight!",
        "Manage LocalStorage, SessionStorage & Cookies!",
    ]);
    return (
        <div className="min-h-screen flex flex-col">
            <div className=" border-y-1 h-36  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px] border-gray-800 flex ">
                    <div className=" grow pl-2 pb-2 border-gray-800 flex flex-col text-sm justify-end">
                        <h4 className="flex items-center text-gray-600 font-medium font-poppins">
                            {text}
                        </h4>
                    </div>
                </div>
            </div>
            <HeroSection />
            <div className=" border-b-1 h-20  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px]   border-gray-800 flex ">
                    <div className=" pl-2 py-10 border-gray-800 flex flex-col text-sm"></div>
                </div>
            </div>
            <Codeblock/>
            <div className=" border-b-1 h-20  border-gray-800 px-10 flex ">
                <div className=" grow border-x-[1px]   border-gray-800 flex ">
                    <div className=" pl-2 py-10 border-gray-800 flex flex-col text-sm"></div>
                </div>
            </div>
            <Carousel/>

        </div>
    );
}

export default Home;
