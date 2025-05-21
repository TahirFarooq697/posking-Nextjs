'use client'
import {useState} from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button, TableComponent, DropdownButton, NormalButton,FilterInput,InfoOverview } from '@/app/components';
import { ProductsReportDetailTable, ProductsReportTableColumns} from '@/app/constants/PageDummyDatas/ProductsReportDetailTable';
const ProductReport = ({path}) => {

        const inputClass = "border border-gray-300 rounded-md p-2";
          const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
          const [filters, setFilters] = useState({ name: '', category: '' });
          const [filteredData, setFilteredData] = useState(ProductsReportDetailTable);
        const [showFilterpurchse, isShowFilterpurchae]=useState(false)
       function handleFilderPurchaseForm(){
         isShowFilterpurchae((prev)=>!prev)
       };
       const handleExportSelect = (value) => {
        if (value === 'print') {
          window.print();
        } else if (value === 'xsl') {
          // Ensure SalesReportDetailTable is not empty
          if (ProductsReportDetailTable.length === 0) {
            alert('No data to export!');
            return;
          }
          const worksheet = XLSX.utils.json_to_sheet(ProductsReportDetailTable);
      
          // Create a new workbook
          const workbook = XLSX.utils.book_new();
      
          // Append the worksheet to the workbook
          XLSX.utils.book_append_sheet(workbook, worksheet, 'productReport');
      
          // Write the workbook to a binary Excel format
          const excelBuffer = XLSX.write(workbook, {
            bookType: 'xlsx',
            type: 'array', // Output as a byte array
          });
      
          // Generate a Blob and trigger the download with FileSaver
          const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
          saveAs(data, 'productReport.xlsx');
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
      setFilters({ name: '', category: '' });
      setFilteredData(ProductsReportDetailTable);
    };
  
      const handleSearch = () => {
      const filtered = ProductsReportDetailTable.filter(item => {
        const nameMatch = filters.name.trim() === '' || item.name.toLowerCase().includes(filters.name.toLowerCase());
        const statusMatch = filters.category.trim() === '' || item.category.toLowerCase().includes(filters.category.toLowerCase());
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

</div>
</div>

    {showFilterpurchse && 
    <form className='mt-4'>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
     
     <FilterInput label="Name" type="text" name="name" className={inputClass} onChange ={handleFilterChange} value={filters.name}/>
     <FilterInput label="Category" type="category" name="category" className={inputClass} onChange ={handleFilterChange} value={filters.category}/>
     </div>
     <div>
       <Button type="button" label="Search" className={btnClass} onClick={handleSearch}/>
       <Button type="button" label="Clear" className={btnClass} onClick={handleClear}/>
    </div>
    </form>
 }
       {/* ...........Report section........ */}
    
         <div className="grid grid-cols-3 gap-6 mt-8 pb-8 border-b-1 border-[#e5e7eb] text-[#6E7191]">
            <InfoOverview title="Total Peoducts" amount='200' className="border-1"/>
            <InfoOverview title="Total Categories" amount='90.00' className="border-1"/>
            <InfoOverview title="Sold Quantity" amount='1298.0' className="border-1"/>

            </div>
    
         {/* ..........table sec...... */}
         <div className="flex justify-center">
          <TableComponent columns={ProductsReportTableColumns} data={filteredData}/>
         </div>
         </div>
        </div>
      );
  
}
export default ProductReport