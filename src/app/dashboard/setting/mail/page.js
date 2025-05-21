'use client'
import {FilterInput, Button,RadioButton} from '@/app/components';
import { usePathname } from 'next/navigation';
 const Mail = () => {
    const pathName=usePathname()
      const btnClass="w-20 bg-[#F23E14] text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
      const filterInputCss='border-1 border-[#e5e7eb] rounded p-3'
  return (
    // ......main div....
    <div>
        {/* ..........top........... */}
        <div className='w-full p-4  border-b-1 border-[#e5e7eb] font-medium text-xl text-[#6E7191]'>{pathName.split('/').filter(Boolean).pop()}</div>
{/* ..............bottom.......... */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 p-4">
        
        <FilterInput label="Mail Host" type="text" name="text" className={filterInputCss}/>
        <FilterInput label="Mil Port" type="Text" name="Text" className={filterInputCss}/>
        <FilterInput label="Mail User Name" type="text" name="user name" className={filterInputCss}/>
        <FilterInput label="Mail Password" type="text" name="password mail" className={filterInputCss}/>
        <FilterInput label="Mail from mail" type="text" name="Mail from mail" className={filterInputCss}/>
        <FilterInput label="Mail from mail" type="text" name="Mail from mail" className={filterInputCss}/>

         <RadioButton label="Mail Encryption" option1="SST" option2="TLS" />
       
       
        </div>
     <div className='p-4 ml-4'><Button type="button" label="Save" className={btnClass}/></div>
       
    </div>
  );
}
export default Mail

