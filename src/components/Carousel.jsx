import React from "react";
import longss from "../assets/longss.png";
import "./carousel.css"


function Carousel() {
    return (
        <div className="  h-fit w-full  border-gray-950 flex ">
            <div className=" h-full  w-full border-x-[1px] border-gray-950 flex ">
                <div className="px-10  h-full w-full border-black flex flex-col text-sm">
                    <div className="scale-[1.001] p-2 border-x-[1px] border-gray-800">
                        <div className=" isolate flex flex-col gap-2 overflow-hidden rounded-2xl  dark:outline-white/10 relative h-148 w-full  ">
                            <div className="absolute -left-[300%] h-150 w-380 min-[500px]:-left-[250%] sm:-left-[200%] md:-left-[150%] lg:-left-[100%] xl:-left-[80%] 2xl:-left-[65%]">
                                <div className="grid origin-top-left scale-130 rotate-x-55 rotate-y-0 -rotate-z-45 grid-cols-3 transform-3d">
                                    <img
                                        src={longss}
                                        width={450}
                                        height={2156}
                                        alt=""
                                        className=" scale-105 animate-slide-down-up"
                                    />
                                    <img
                                        src={longss}
                                        width={450}
                                        height={2307}
                                        alt=""
                                        className="scale-105 animate-slide-up-down"
                                    />
                                    <img
                                        src={longss}
                                        width={450}
                                        height={1843}
                                        alt=""
                                        className="scale-105 animate-slide-down-up"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
