'use client'
import React, { useState } from 'react';
import { BtnwithIcon } from './BtnwithIcon';
import { LuLayoutDashboard } from "react-icons/lu";
import SidebarManu from './SidebarManu';
import Image from 'next/image';
import logo from '../../images/logo.png'
import { RxCross2 } from "react-icons/rx";
const Sidebar = ({toggleSidebar}) => {
  const basicCss='font-sans font-semibold min h-screen overflow-y-auto transition-all duration-700 pb-10'
  return (
    //min div
    <div className={basicCss}>
      <div className='md:hidden flex items-center justify-between p-4 bg-white'>
        <Image src={logo} alt="" className='w-[50%] h-[40%] object-contain'/>
        <div className='mx-6 text-2xl'>
          <RxCross2 onClick={toggleSidebar}/>
        </div>
      </div>
      <BtnwithIcon title="Dashboard" icon={<LuLayoutDashboard />} path="/dashboard" />
      <div>
        <SidebarManu/>
      </div>
</div>
  );
}

export default Sidebar;