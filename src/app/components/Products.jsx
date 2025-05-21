
import React from "react";
import { productsData } from "../constants/DummyProducts.js";
import ProductCart from "./ProductCart.jsx";
export const Products=()=> {
  return (
    <div className=" p-6 min-h-screen bg-white">
       <div className="border-b border-gray-300 pb-4 mb-6">
       <h2 className="text-xl font-semibold p-2 md:p-3 font-sans text-gray-900 mb-1 md:mb-3">Top Products</h2>
        </div>
       
       <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
      {productsData.map(product => (
        <ProductCart key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}
 