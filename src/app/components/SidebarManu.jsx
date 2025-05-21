import React from 'react';
import { BtnwithIcon } from './BtnwithIcon';
import { sidebarData } from '../constants/Sidebardata';
 const SidebarManu = () => {
 
  return (
    <section className="p-4 bg-white md:w-64 h-full shadow-md overflow-y-auto ">
    {sidebarData.map((section, index) => (
      <div key={index} className="mb-6">
        <label className="block font-sans font-semibold text-gray-400">{section.label}</label>
        <div className="mt-2">
          {section.items.map((item, idx) => (
            <BtnwithIcon key={idx} title={item.title} icon={item.icon} path={item.path} />
          ))}
        </div>
      </div>
    ))}
  </section>
  
  );
}
export default SidebarManu;

