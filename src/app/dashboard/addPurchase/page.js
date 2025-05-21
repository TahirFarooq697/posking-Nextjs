'use client'
import {useState} from 'react';
import { Button,FilterInput } from '@/app/components';
import { useRouter } from 'next/navigation';
 const AddPurchaseForm = () => {
  const cancelProduct=useRouter();
  const [purchaeData, setPurchaseData] = useState({
    supplier: "",
    date: "",
    refrenceNo: "",
    status: "Active",
    total:"",
    note:""
  });
  function handleCancel(){
    cancelProduct.push("/dashboard/purchase")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPurchaseData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
  
    const isValid = purchaeData.supplier && purchaeData.date && purchaeData.refrenceNo && purchaeData.status && purchaeData.total && purchaeData.note ;
  
    if (isValid) {
      const existingPurchase = JSON.parse(localStorage.getItem('Purchase')) || [];
  
      const updatedPurchase = [...existingPurchase, purchaeData];
      localStorage.setItem('Purchase', JSON.stringify(updatedPurchase));
  
      alert('Purchase saved!');
  
      setPurchaseData({
        supplier: "",
        date: "",
        refrenceNo: "",
        status: "Active",
        total:"",
        note:""
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>   
   <form className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
         
   
         <div>
          
           <FilterInput
           label="Suplier"
             name="suplier"
             value={purchaeData.supplier}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
   
         <div>
           
           <FilterInput
           label="Date"
             name="date"
             value={purchaeData.date}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>

         <div>
           
           <FilterInput
           label="RefrenceNo"
             name="refrenceNo"
             type="number"
             value={purchaeData.refrenceNo}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>

   
         <div>
           
           <FilterInput
           label="Status"
            name="status"
            type="text"
            value={purchaeData.status}
            onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
             
           />
         </div>
         <div>
           
           <FilterInput
           label="Total"
            name="total"
            type="text"
            value={purchaeData.total}
            onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
             
           />
         </div>
         <div>
           
           <FilterInput
           label="Note"
            name="note"
            type="text"
            value={purchaeData.note}
            onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none "
             
           />
         </div>
     
  
       <div className='flex gap-3'>
       <Button type='button' label="save" onClick={handleSave}/>
       <Button type='button' label="cancel" onClick={handleCancel}/>
       </div>
       </form>
       </>
  );
}
export default AddPurchaseForm
 
