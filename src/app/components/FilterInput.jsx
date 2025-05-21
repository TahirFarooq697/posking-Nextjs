import React from 'react';
 const FilterInput = ({ label, type, name, value, onChange, className }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-normal text-[#6E7191] mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}   
        onChange={onChange}        
        className={className}
      />
    </div>
  );
};
export default FilterInput