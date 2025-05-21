import React from 'react';
import { BtnwithIcon } from '../BtnwithIcon';

const SettingSideBar = () => {
 
   
  return (
    <>
            <BtnwithIcon title="Company" path="/dashboard/setting/company"/>
            <BtnwithIcon title="Site"  path="/dashboard/setting/site"/>
            <BtnwithIcon title="Mail"  path="/dashboard/setting/mail"/>
            <BtnwithIcon title="Location Setup" path="/dashboard/setting/locatioSetup"/>
            <BtnwithIcon title="Currencies" path="/dashboard/setting/currencySetup"/>
            <BtnwithIcon title="Product Categories" path="/dashboard/setting/productCategories"/>
            <BtnwithIcon title="Product Attributies" path="/dashboard/setting/productAttributes"/>
            <BtnwithIcon title="Product Brands" path="/dashboard/setting/productBrand"/>
            <BtnwithIcon title="Suppliers" path='/dashboard/setting/supplier'/>
            <BtnwithIcon title="Units" path="/dashboard/setting/unit"/>
            <BtnwithIcon title="Taxes" path='/dashboard/setting/taxes'/>
           
    </>
  );
}

export default SettingSideBar;
