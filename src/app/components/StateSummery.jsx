import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import ShowProgress from "./ShowProgress";

 const StateSummery=()=>{
  return (
    <section className="p-4 md:p-6 mb-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-10 rounded-lg shadow-md">
         
          <div className="flex flex-row justify-between items-center border-b border-gray-300 pb-4 mb-6">
            <h1 className="text-lg font-semibold font-sans">Sales Summary</h1>
            <FaRegCalendarAlt className="text-[#F23E14] text-2xl"/>
          </div>

          <div className="flex flex-row gap-10">
               
          <ShowProgress title="Total Sales" amount="$0.00" />
          <ShowProgress title="Total Profit" amount="$0.00" />
        
          </div>
        </div>

        {/* //////////////Right side wala///////////////// */}
        <div className="bg-white p-10 rounded-lg shadow-md">
         
          <div className="flex flex-row justify-between items-center border-b border-gray-300 pb-4 mb-6">
            <h1 className="text-lg font-semibold font-sans">Order Stats</h1>
            <FaRegCalendarAlt className="text-[#F23E14] text-2xl" />
          </div>

        
        </div>
        
      </div>
    </section>
  );
}
export default StateSummery