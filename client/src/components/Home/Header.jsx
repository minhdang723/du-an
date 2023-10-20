import React from 'react';

import { GrMenu } from "react-icons/gr";
import { LiaSearchSolid } from "react-icons/lia";

const Header = () => {
    return (
        <div className="h-full w-[100%] px-[10px] py-[10px] flex justify-between items-center">
            <div className="text-[1.5rem] cursor-pointer">
                <GrMenu />
            </div>
            <div className="flex items-center px-4 py-2 border-solid border-2 border-gray-400 rounded-md">
                <LiaSearchSolid className="text-xl" />
                <input className="bg-transparent ml-[10px] outline-none text-[.8rem]" placeholder="search..." />
            </div>
            <div className="flex items-center">
                <img src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} width={30} height={30} />
                <div className="ml-[10px]">
                    <h1 className="font-bold text-[.9rem] mb-[5px]">Nguyen Van A</h1>
                    <p>admin</p>
                </div>
            </div>
        </div>
    );
};

export default Header;