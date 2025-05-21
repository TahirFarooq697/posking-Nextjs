'use client'
import {useState}from 'react';
import * as XLSX from 'xlsx';
import { Button, TableComponent, DropdownButton, NormalButton,FilterInput } from '@/app/components';
import { CustomersDetailsTalbe,CustomersTalbeColums } from '@/app/constants/PageDummyDatas/CustomersDetailsTalbe';

 const CustomersDetails = ({path}) => {
  const [filters, setFilters] = useState({ name: '', email: '' });
  const [filteredData, setFilteredData] = useState(CustomersDetailsTalbe);
  const inputClass = "border border-gray-300 rounded-md p-2";
        const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
        
       const [showFilterpurchse, isShowFilterpurchae]=useState(false)
      function handleFilderPurchaseForm(){
        isShowFilterpurchae((prev)=>!prev)
      };
      const handleExportSelect = (value) => {
        if (value === 'print') {
          window.print();
        } else if (value === 'xsl') {
          if (CustomersDetailsTalbe.length === 0) {
            alert('No data to export!');
            return;
          }
    
          const worksheet = XLSX.utils.json_to_sheet(CustomersDetailsTalbe);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Customers');
    
          const excelBuffer = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array',
          });
    
          const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
          saveAs(data, 'customers.xlsx');
        }
      };
       //onchange
    const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    //handle clear buttin
    const handleClear = () => {
      setFilters({ name: '', email: '' });
      setFilteredData(CustomersDetailsTalbe);
    };
     //filter
     const handleSearch = () => {
      const filtered = CustomersDetailsTalbe.filter(item => {
        const nameMatch = filters.name.trim() === '' || item.name.toLowerCase().includes(filters.name.toLowerCase());
        const statusMatch = filters.email.trim() === '' || item.email.toLowerCase().includes(filters.email.toLowerCase());
        return nameMatch && statusMatch;
      });
    
      setFilteredData(filtered);
    };
  return (
    <div className='w-full'>
    
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

    {/* check till here */}
<Button label="Add Customer" path="/MainLayout/AddCustomerForm"/>
</div>
</div>

 
    {showFilterpurchse && 
    <form className='mt-4'>
     <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
     <FilterInput label="Name" type="text" name="name" className={inputClass} onChange={handleFilterChange} value={filters.name}/>
     <FilterInput label="Email" type="email" name="email" className={inputClass} onChange={handleFilterChange} value={filters.email}/>

    
    </div>
    <div>
       <Button type="button" label="Search" className={btnClass}  onClick={handleSearch}/>
       <Button type="button" label="Clear" className={btnClass} onClick={handleClear}/>
    </div>
    </form>
 } 
    
     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={CustomersTalbeColums} data={filteredData}/>
     </div>
     </div>
    </div>
  );
}

export default CustomersDetails
