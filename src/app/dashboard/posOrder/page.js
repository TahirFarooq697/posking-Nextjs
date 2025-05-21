'use client'
import React,{useState} from 'react';
import * as XLSX from 'xlsx';
import {FilterInput, Button, TableComponent, DropdownButton, NormalButton } from '@/app/components';
import { PosDetailsTable,PosTableColumn } from '@/app/constants/PageDummyDatas/PosDetailsTable';
 const PosDetails = ({path}) => {
   const [filters, setFilters] = useState({
    orderId: '',
    customer: '',
        
      });
    const inputClass = "border border-gray-300 rounded-md p-2";
      const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
     const [showFilterpurchse, isShowFilterpurchae]=useState(false)
     const [filteredData, setFilteredData] = useState(PosDetailsTable);
    function handleFilderPurchaseForm(){
      isShowFilterpurchae((prev)=>!prev)
    };

    const handleExportSelect = (value) => {
      if (value === 'print') {
        window.print();
      } else if (value === 'xsl') {
        if (PosDetailsTable.length === 0) {
          alert('No data to export!');
          return;
        }
  
        const worksheet = XLSX.utils.json_to_sheet(PosDetailsTable);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'posOrder');
  
        const excelBuffer = XLSX.write(workbook, {
          bookType: 'xlsx',
          type: 'array',
        });
  
        const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(data, 'posOrder.xlsx');
      }
    };

    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    //clear
    const handleClear = () => {
      
      setFilters({ orderId: '',
        customer: '',});
      setFilteredData(PosDetailsTable);
    };
     // search
     const handleSearch = () => {
      const hasAtLeastOneFilter = Object.values(filters).some(
        (val) => val.trim() !== ''
      );
      if (!hasAtLeastOneFilter) {
        setFilteredData(PosDetailsTable);
        return;
      }
  
      const filtered = PosDetailsTable.filter((item) => {
        return (
          (filters.orderId.trim() === '' ||
            item.orderId.toLowerCase().includes(filters.orderId.toLowerCase())) &&
          (filters.customer.trim() === '' ||
            item.customer
              .toLowerCase()
              .includes(filters.customer.toLowerCase())) 
         
        );
      });
  
      setFilteredData(filtered);
    };
  
  return (
    <div className='w-full'>
    
     {/* .........table... */}
     <div className='flex flex-col justify-between  mt-6 px-6 py-6 bg-white rounded shadow-lg'>
     
     <div className='flex justify-between items-center'>
        <div>
          <span className='text-secondry font-medium'>{path}</span>
        </div>
      <div className='flex gap-3'>
    
    <NormalButton title="Filter" className='btnClassfilter' filter={handleFilderPurchaseForm}/>
    <DropdownButton title="Export" options={[
  { label: 'Print', value: 'print' },
  { label: 'XSL', value: 'xsl' },
]} onSelect={handleExportSelect}/>
   
</div>
</div>
    
    {showFilterpurchse && 
    <form className='mt-4'>
     <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
     <FilterInput label="order id" type="text" name="orderId" className={inputClass} onChange={handleFilterChange} value={filters.orderId}/>
    <FilterInput label="Customer" type="text" name="customer" className={inputClass} onChange={handleFilterChange} value={filters.customer}/>
    
    
   
    </div>
    <div>
       <Button type="button" label="Search" className={btnClass} onClick={handleSearch}/>
       <Button type="button" label="Clear" className={btnClass} onClick={handleClear}/>
    </div>
    </form>
 } 
   
     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={PosTableColumn} data={filteredData}/>
     </div>
     </div>
    </div>
  );
}
export default PosDetails