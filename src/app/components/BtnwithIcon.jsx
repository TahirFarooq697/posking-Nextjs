
'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BtnwithIcon = ({ title, icon, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  const baseClasses = "p-3 rounded hover:bg-gray-100 text-[#6E7191] flex items-center border-b-1 border-[#e5e7eb] font-medium";
  const checkIsImg = typeof icon === 'string';

  return (
    <Link href={path} className={`${baseClasses} ${isActive ? 'btn-nav-active' : ''}`}>
      {checkIsImg ? (
        <img src={icon} alt={title} className="w-4 h-4 mr-2" />
      ) : (
        <span className="text-secondry px-2">{icon}</span>
      )}
      <span>{title}</span>
    </Link>
  );
};
