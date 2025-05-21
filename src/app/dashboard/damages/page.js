'use client'
import {useState} from 'react';
import { Button, TableComponent, DropdownButton, NormalButton,FilterInput } from '@/app/components';
import * as XLSX from 'xlsx';
import { DamagesDetailsTable,DamagesTableColumns } from '@/app/constants/PageDummyDatas/DamagesDetailsTable';
 const DamagesDetails = ({path}) => {
   const [filters, setFilters] = useState({
      date: '',
      refrenceNo: '',
      
    });
    const [filteredData, setFilteredData] = useState(DamagesDetailsTable);
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
        if (DamagesDetailsTable.length === 0) {
          alert('No data to export!');
          return;
        }
  
        const worksheet = XLSX.utils.json_to_sheet(DamagesDetailsTable);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'damages');
  
        const excelBuffer = XLSX.write(workbook, {
          bookType: 'xlsx',
          type: 'array',
        });
  
        const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
        saveAs(data, 'damages.xlsx');
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
    //clear field
    const handleClear = () => {
      
      setFilters({ date: '',
        refrenceNo: '',});
      setFilteredData(DamagesDetailsTable);
    };
    // search
    const handleSearch = () => {
      const hasAtLeastOneFilter = Object.values(filters).some(
        (val) => val.trim() !== ''
      );
      if (!hasAtLeastOneFilter) {
        setFilteredData(DamagesDetailsTable);
        return;
      }
  
      const filtered = DamagesDetailsTable.filter((item) => {
        return (
          (filters.date.trim() === '' ||
            item.date.toLowerCase().includes(filters.date.toLowerCase())) &&
          (filters.refrenceNo.trim() === '' ||
            item.refrenceNo
              .toLowerCase()
              .includes(filters.refrenceNo.toLowerCase())) 
         
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
      
     <FilterInput label="Date" type="date" name="date" className={inputClass}  onChange={handleFilterChange} value={filters.date}/>
     <FilterInput label="Refrence number" type="number" name="refrenceNo" className={inputClass}  onChange={handleFilterChange} value={filters.refrenceNo}/>
    
   
     </div>
     <div>
        <Button type="button" label="Search" className={btnClass} onClick={handleSearch}/>
        <Button type="button" label="Clear" className={btnClass} onClick={handleClear}/>
     </div>
     </form>
  } 
   
     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={DamagesTableColumns} data={filteredData}/>
     </div>
     </div>
    </div>
  );
}
export default DamagesDetails
