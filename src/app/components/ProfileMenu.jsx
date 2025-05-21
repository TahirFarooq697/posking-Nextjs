import React from 'react';
import { FaUserEdit,FaKey  } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import Image from 'next/image';
import profileImage from "../../images/profile.jpg"
import { BtnwithIcon } from './BtnwithIcon';
import { useRouter } from 'next/navigation';

export const ProfileMenu = ({ref}) => {
const router=useRouter();
  const handleLogout = () => {
   router.push('/');
  };

  const handleEditProfile = () => {
   router.push('/dashboard/profileEdit');
  };
  
  const handlepasswordchange = () => {
     router.push('/dashboard/changePassword');
  };
  return (
    //main div
    <div className="absolute right-0 top-full w-60 bg-white shadow-lg rounded-lg z-10 p-4 " ref={ref}>
      
      <div className='flex flex-col items-center justify-center'>
        <Image src={profileImage} alt="" className='w-15 h-15 rounded-full mb-4'/>
        <h3 className="font-medium text-secondry">Tahir Farooq</h3>
        <p className="text-sm text-secondry">tahirfarooq@gmail.com</p>
        <p className="text-sm text-secondry mb-1">+923554590516</p>
      </div>
      
    {/* </div> */}
    
     <div className='mt-5'>
   
    <BtnwithIcon title="Edit Profile" icon={<FaUserEdit />} handleClick={handleEditProfile} path="/dashboard/profileEdit"/>
    <BtnwithIcon title="Change Password" icon={<FaKey />} handleClick={handlepasswordchange} path="/dashboard/changePassword"/>
    <BtnwithIcon title="Logout" icon={<FiLogOut />} handleClick={handleLogout} path='/'/>
   
  </div>
  </div>
  );
}

