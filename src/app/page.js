 'use client'
 import { useState } from 'react';
 import { useRouter } from 'next/navigation';
 import Image from 'next/image';
import authImg from "../images/auth.jpg"
export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router=useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen md:mt-20">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg">
        {/* image side */}
        <div className=" md:w-1/2 md:h-full bg-gray-200 flex justify-center items-center">
          <Image
            src={authImg}
            alt="Main image"
            priority
            className="object-cover md:w-full h-full "
          />
        </div>

       {/* form side */}
        <div className="w-full md:w-1/2 p-4 md:p-6">
          <h2 className="text-2xl font-bold text-center mb-3  font-sans text-[#F23E14]">Sign In</h2>
          <p className='text-medium font-semibold text-center mb-6 text-[#000000] font-sans'> Sign in to continue shopping</p>
          <form onSubmit={handleSubmit}>
        
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#000000] font-sans">
                
                Email
              </label>
              <input
                type='email'
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus-ring"
                required
              />
             </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-[#000000] font-sans ">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus-ring"
                required
              />
            </div>
            <div className="flex items-center mb-4 justify-between">
                <div>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2 h-4 w-4"
                required
              />
              <label htmlFor="rememberMe" className="text-medium text-[#000000] font-sans">Remember Me</label>
              </div>
              <div className="text-right mb-2">
              <a href="#" className="text-medium text-[#F23E14] font-sans">Forgot Password?</a>
            </div>
            </div>
           
            <button type="submit" className="w-full py-2 text-lg font-medium bg-[#F23E14] text-white  rounded-3xl hover:cursor-pointer">
              Sign In
            </button> 
          </form>


        
        </div>
      </div>
    </div>
  );
};

