'use client'
import React, { useState, useRef, useEffect } from 'react';

export const DropdownButton = ({ title, options, onSelect }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border-1 border-[#F23E14] rounded bg-white focus-ring"
      >
        <span className='text-[#F23E14]'>{title}</span>
        <svg className="w-4 h-4 text-[#F23E14] " fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 mt-4 w-40 bg-white rounded shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onSelect(option.value);  
                setOpen(false);          
              }}
              className="px-4 py-2 hover:bg-gray-100 text-[#F23E14] cursor-pointer"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


