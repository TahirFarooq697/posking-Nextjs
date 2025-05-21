import React from 'react';

export const NormalButton = ({title, filter}) => {
  return (
    <button onClick={filter}
        
        className="flex items-center gap-2 px-4 py-2 border-1 border-[#F23E14] rounded bg-white 100 focus-ring"
      >
        <span className='text-[#F23E14]'>{title}</span>
        
      </button>
  );
}


