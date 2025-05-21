import React from 'react';
import { Products } from '../components/Products';
import { infoItems } from '../constants/infoItems';
import InfoOverview from '../components/InfoOverview';
import StateSummery from '../components/StateSummery';
 const DashboardPage = () => {
  return (
    <section>
       <div className="bg-[#FEE2E2] py-4 px-4 m-2 text-left">
        <div className="text-[#6E7191] font-semibold ">Reminder!</div>
        <div className="text-[#6E7191] text-sm font-medium ">Dummy data will reset in every 30 minut.</div>
    </div>
    <div className="py-3 px-4 text-left">
            <h2 className="text-xl font-bold text-[#F23E14] font-sans hidden md:block">Good Morning!</h2>
            <div><h3 className="text-lg font-semibold p-3 font-sans text-gray-900 hidden md:block">Tahir Farooq</h3></div>
            
        </div>
            <div className="px-4 " >
        
                    <h2 className="text-xl font-semibold p-3 font-sans text-gray-900 mb-3 mx-auto">Overview</h2>
        
                         <div className="w-[100%] sm:mx-auto md:max-w-full grid grid-cols-1 md:grid-cols-4 gap-6 mb-4 md:mb-8 text-white">
                          {infoItems.map((item, index) => (
                             <InfoOverview
                               key={index}
                               title={item.title}
                               amount={item.amount}
                               className={item.className}/>))}
                        </div>
                    </div>
   
     <StateSummery/>
    <Products/>
     
    </section>
  );
}

export default DashboardPage
