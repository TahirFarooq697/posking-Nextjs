'use client'
import { CompanyfilterFields } from '@/app/constants/settingManusData/FilterFieldsData';
import {FilterInput, Button} from '@/app/components';
import { usePathname } from 'next/navigation';
const Company = () => {
  const pathname=usePathname();
    const btnClass="w-20 bg-[#F23E14] text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
  return (
    // ......main div....
    <div>
        {/* ..........top........... */}
        <div className='w-full p-4  border-b-1 border-[#e5e7eb] font-medium text-xl text-[#6E7191]' >{pathname.split('/').filter(Boolean).pop()}</div>
{/* ..............bottom.......... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-4">
       
        {CompanyfilterFields.map((field, idx) => (
      <FilterInput
        key={idx}
        label={field.label}
        type={field.type}
        name={field.name}
        className=" border-1 border-[#e5e7eb] rounded p-3 "
      />
    ))}
       
        </div>
        <div className='px-4 ml-4'>
        <FilterInput label="Address" type="text" name="sku" className="h-30 border-1 border-[#e5e7eb] rounded p-3"/>
        
        </div>
     <div className='p-4 ml-4'><Button type="button" label="Save" className={btnClass}/></div>
       
    </div>
  );
}

export default Company
