
import React from 'react';

import { FaRegImage } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import logo from '../assets/retain-iq.png'
// import './style.css'
const Sidebar = () => {
    return (
        <div className="w-20 bg-black flex flex-col items-center justify-between">
            <div className='flex flex-col items-center gap-6 mt-4'>
                <div>
                    <div className="p-3">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className='flex items-center flex-col gap-2'>
                    <div >
                        <FaRegImage className='text-gray-400 h-6 w-6' />
                    </div>
                    <div className="p-5">
                        <FaMeta className='text-gray-400 h-6 w-6' />
                    </div>
                    <div >
                        <span class="material-symbols-outlined text-gray-400 " >
                            shopping_bag
                        </span>
                    </div>
                </div>

            </div>
            <div>
                <div className="p-5">
                    <IoSettingsOutline className='text-gray-400 h-6 w-6' />
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
