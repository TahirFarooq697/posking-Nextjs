'use client'
import {useState} from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Button, TableComponent, DropdownButton, NormalButton,FilterInput ,InfoOverview} from '@/app/components';
import { SalesReportDetailTable, SalesReportTableColums} from '@/app/constants/PageDummyDatas/SalesReportDetailTable';
 const SalesReport = ({path}) => {
    const inputClass = "border border-gray-300 rounded-md p-2";
          const btnClass="w-20 bg-primary  text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3"
                const [filters, setFilters] = useState({ orderId: '', paymentStatus: '' });
               const [filteredData, setFilteredData] = useState(SalesReportDetailTable);
         const [showFilterpurchse, isShowFilterpurchae]=useState(false)
        function handleFilderPurchaseForm(){
          isShowFilterpurchae((prev)=>!prev)
        };
        const handleExportSelect = (value) => {
          if (value === 'print') {
            window.print();
          } else if (value === 'xsl') {
            if (SalesReportDetailTable.length === 0) {
              alert('No data to export!');
              return;
            }
            const worksheet = XLSX.utils.json_to_sheet(SalesReportDetailTable);
  
            const workbook = XLSX.utils.book_new();
        
            XLSX.utils.book_append_sheet(workbook, worksheet, 'salesReport');
            const excelBuffer = XLSX.write(workbook, {
              bookType: 'xlsx',
              type: 'array', // Output as a byte array
            });
        
    
            const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
            saveAs(data, 'salesReport.xlsx');
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
      setFilters({ orderId: '', paymentStatus: '' });
      setFilteredData(SalesReportDetailTable);
    };
     //filter
     const handleSearch = () => {
      const filtered = SalesReportDetailTable.filter(item => {
        const nameMatch = filters.orderId.trim() === '' || item.orderId.toLowerCase().includes(filters.orderId.toLowerCase());
        const statusMatch = filters.paymentStatus.trim() === '' || item.paymentStatus.toLowerCase().includes(filters.paymentStatus.toLowerCase());
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
     <FilterInput label="OrderId" type="text" name="orderId" className={inputClass} onChange ={handleFilterChange} value={filters.orderId}/>
     <FilterInput label="Payment Status" type="text" name="paymentStatus" className={inputClass} onChange={handleFilterChange} value={filters.paymentStatus}/>
  
    </div>
    <div>
       <Button type="button" label="Search" className={btnClass} onClick={handleSearch}/>
       <Button type="button" label="Clear" className={btnClass} onClick={handleClear}/>
    </div>
    </form>
 }
   {/* ...........Report section........ */}

     <div className="grid grid-cols-4 gap-6 mt-8 pb-8 border-b-1 border-[#eeeeee] text-[#6E7191]">
        <InfoOverview title="Total Orders" amount='2' className=" border-1"/>
        <InfoOverview title="Total Earnings" amount='$490.00' className=" border-1"/>
        <InfoOverview title="Total Discount" amount='$8.0' className=" border-1"/>
         <InfoOverview title="Total Chinpping charge" amount='$10' className="border-1"/>
        </div>

     {/* ..........table sec...... */}
     <div className="flex justify-center">
      <TableComponent columns={SalesReportTableColums} data={filteredData}/>
     </div>
     </div>
    </div>
  );
}

export default SalesReport