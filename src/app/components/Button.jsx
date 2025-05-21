
import React from 'react';
import Link from 'next/link';

export const Button = ({ label, path, className = "", onClick, type = "button" }) => {
  const baseStyles = "text-white py-2 px-4 rounded-md hover:cursor-pointer bg-[#F23E14] items-center";
  const combinedClasses = `${baseStyles} ${className}`.trim();

  if (path) {
    return (
  <Link href={path} className={combinedClasses}>
  {label}
</Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
    >
      {label}
    </button>
  );
};





