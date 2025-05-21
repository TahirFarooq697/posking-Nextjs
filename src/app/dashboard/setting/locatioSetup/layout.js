import React from 'react';
import { Button } from '@/app/components';
 const LocationSetup = ( {children}) => {

  return (
    // ......main div....
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 p-4 w-full'>
        <Button label="Countries" path="/dashboard/setting/locatioSetup/country"/>
        <Button label="States" path="/dashboard/setting/locatioSetup/states"/>
        <Button label="Cities" path="/dashboard/setting/locatioSetup/cities"/>
        </div>
        {/* ..........top........... */}
        
       {children}
    </div>
  );
}
export default LocationSetup


