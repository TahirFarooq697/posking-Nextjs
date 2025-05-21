'use client'
import { useState } from 'react';
import { FilterInput, Button} from '@/app/components';
import { useRouter } from 'next/navigation';
// import { useNavigate } from 'react-router-dom';
 const AddProductForm = () => {
  const route=useRouter();
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    buyingPrice: "",
    sellingPrice: "",
    status: "Active",
  });
  function handleCancel(){
    route.push("/dashboard/product")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
  
    const isValid = productData.name && productData.category && productData.buyingPrice && productData.sellingPrice;
  
    if (isValid) {
      const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
  
      const updatedProducts = [...existingProducts, productData];
      localStorage.setItem('products', JSON.stringify(updatedProducts));
  
      alert('Product saved!');
  
      setProductData({
        name: "",
        category: "",
        buyingPrice: "",
        sellingPrice: "",
        status: "Active",
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>   
   <form className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
         <h2 className="text-lg font-semibold mb-4 text-center text-gray-400">Add New Product</h2>
   
         <div>
           
           <FilterInput
           label="Product Name"
             name="name"
             value={productData.name}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>
   
         <div>
          
           <FilterInput
           label="Category"
             name="category"
             value={productData.category}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>

         <div>
           
           <FilterInput
            label="buying Price"
             name="buyingPrice"
             type="text"
             value={productData.buyingPrice}
             onChange={handleChange}
             className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
             
           />
         </div>

   
         <div>
        
           <FilterInput
           label="selling price"
            name="sellingPrice"
            type="number"
            value={productData.sellingPrice}
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

export default AddProductForm
