'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import { Button, FilterInput ,FilterDropdownInput,RadioButton} from '@/app/components';

 const Site = () => {
      const pathname=usePathname();
    const btnClass="w-20 bg-[#F23E14] text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
  return (
    // ......main div....
    <div>
        {/* ..........top........... */}
        <div className='w-full p-4  border-b-1 border-[#e5e7eb] font-medium text-xl text-[#6E7191]' >{pathname.split('/').filter(Boolean).pop()}</div>
{/* ..............bottom.......... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-4">
        <FilterDropdownInput label="Date Format" options={[
          { label: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
          { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
        ]}/>
        <FilterInput label="Date" type="date" name="date" className="border-1 border-[#e5e7eb] rounded p-3"/>
        <FilterInput label="Phone" type="number" name="number" className="border-1 border-[#e5e7eb] rounded p-3"/>
        <FilterInput label="langyage" type="text" name="text" className="border-1 border-[#e5e7eb] rounded p-3"/>
        <FilterInput label="City" type="text" name="text" className="border-1 border-[#e5e7eb] rounded p-3"/>
        <FilterInput label="State" type="text" name="sku" className="border-1 border-[#e5e7eb] rounded p-3"/>
        <div className='grid md:grid-cols-2 gap-x-35 items-center mt-4 text-[#6E7191]'>

        <RadioButton label="Cash On Delivery" option1="Enable" option2="Disable"/>
        <RadioButton label="Currency position" option1="()left" option2="()Right"/>
        <RadioButton label="Online payment Gatway" option1="Enable" option2="Disable"/>
        <RadioButton label="Email verification" option1="Enable" option2="Disable"/>
        <RadioButton label="Phone verification" option1="Enable" option2="Disable"/>
        <RadioButton label="Language switch" option1="Enable" option2="Disable"/>
        <RadioButton label="App Debug" option1="Enable" option2="Disable"/>
        </div>
       
        </div>
     <div className='p-4 ml-4'><Button type="button" label="Save" className={btnClass}/></div>
       
    </div>
  );
}

export default Site

