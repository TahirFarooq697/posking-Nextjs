import React from 'react';

export const RadioButton = ({label,option1,option2}) => {
  return (
    <div>
    <label className="font-semibold block mb-2 text-[#6E7191]">{label}</label>
    <div className="flex gap-6">
      <label className="flex items-center gap-2 text-[#6E7191]">
        <input type="radio" name="cod" value="enable" />
        {option1}
      </label>
      <label className="flex items-center gap-2 text-[#6E7191]">
        <input type="radio" name="cod" value="disable" />
        {option2}
      </label>
    </div>
  </div>
  );
}


