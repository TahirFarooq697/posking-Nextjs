import React from 'react';
// import SettingSideBar from '../SettingPages/SettingSideBar';
import SettingSideBar from '@/app/components/SettingComponents/SettingSideBar';
export default function SettingsLayout ({ children }){
  return (
  //main div
    <div>
     {/* ......title top div.... */}

     {/* ..........bottom div.... */}
     <div className='flex flex-row mt-4'>
      {/* ........sidebar............. */}
      
      <div className='min-h-full w-1/4 bg-white p-4 mr-5'>
      <SettingSideBar/> 
     </div>

      {/* ................main content dev........ */}
      <div className='min-h-full w-full bg-white'>
    {children}

      </div>
     </div>
    </div>
  );
}

