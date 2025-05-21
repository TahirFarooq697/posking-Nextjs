
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FaAlignLeft } from 'react-icons/fa';
import { ProfileMenu } from './ProfileMenu'; 
import { LanguageSelector } from './SelectLanguage';
import logo from "../../images/logo.png"
import englishFlag from "../../images/englishFlag.png"
import profileImg from "../../images/profile.jpg"
export default function Header({ toggleSidebar }){
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLanguageChange, setIsLanguageChange] = useState(false);

  const profileRef = useRef(null);
  const profileBtnRef = useRef(null);
  const CountryRef = useRef(null);
  const CountryRefBtn = useRef(null);

  const handleProfileToggle = () => setIsProfileOpen(prev => !prev);
  const handleLanguage = () => setIsLanguageChange(prev => !prev);

  // Handle clicks outside of menus
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        CountryRef.current &&
        !CountryRef.current.contains(event.target) &&
        CountryRefBtn.current &&
        !CountryRefBtn.current.contains(event.target)
      ) {
        setIsLanguageChange(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target) &&
        profileBtnRef.current &&
        !profileBtnRef.current.contains(event.target)
      ) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="px-3 md:px-4 py-6 md:py-3 mx-4 flex justify-items-start md:justify-between items-center relative mb-2 gap-2">
      {/* Logo */}
      <div className="hover:cursor-pointer">
        <Image
          src={logo}
          alt="Logo"
          width={500}
          height={300}
          className="object-contain w-[50%] md:w-[20%] h-auto"
        />
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-1 md:space-x-3 relative">
        {/* Language Selector */}
        <div className="py-1 md:px-4 relative hidden md:block">
          <button
            className="flex items-center p-2 rounded-lg hover:cursor-pointer bg-[#FFEDF4]"
            onClick={handleLanguage}
            ref={CountryRefBtn}
          >
            <Image
              src={englishFlag}
              alt="Flag"
              width={16}
              height={16}
              className="mr-3 rounded-sm"
            />
            <span className="text-lg text-gray-800">English</span>
          </button>
          <div className="absolute top-full right-0 mt-3 z-50">
            {isLanguageChange && <LanguageSelector ref={CountryRef} />}
            
          </div>
        </div>

        {/* Sidebar Toggle */}
        <div>
          <button
            className="hover:cursor-pointer bg-[#FFEDF4] p-2 md:p-3 rounded-lg"
            onClick={toggleSidebar}
          >
            <FaAlignLeft className="text-[#F23E14]" />
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center md:py-4 px-2 md:px-4 rounded-lg hover:cursor-pointer"
            onClick={handleProfileToggle}
            ref={profileBtnRef}
          >
            <Image
              src={profileImg}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-sm mr-1"
            />
            <span className="text-lg text-[#6E7191] font-medium">
              Hello Tahir
            </span>
          </button>
          <div className="absolute top-full right-0 mb-3 z-50">
            {isProfileOpen && <ProfileMenu ref={profileRef} />}
           
          </div>
        </div>
      </div>
    </header>
  );
};

