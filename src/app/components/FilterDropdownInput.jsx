import React from 'react';

export const FilterDropdownInput = ({label,  options = []}) => {
  return (
    <div className="flex flex-col">
    <label className="text-sm font-medium text-[#6E7191] mb-1">{label}</label>
    <select name="category" className="border border-gray-300 rounded-md p-2">
      <option value="">--</option>
      {options.map((opt, index) => (
          <option key={index} value={opt.value}>{opt.label}</option>
        ))}
    </select>
  </div>
  );
}


