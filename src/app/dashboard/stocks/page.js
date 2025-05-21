'use client'
import { useState } from 'react';
import * as XLSX from 'xlsx';
import SearchStockForm from '@/app/components/SearchStockForm';
import { TableComponent, DropdownButton, NormalButton } from '@/app/components';
import { StockDetailsTables, StockTableColumns} from '@/app/constants/PageDummyDatas/StockDetailsTables';
 const StockDetails = ({ path }) => {
  const inputClass = "border border-gray-300 rounded-md p-2";
  const btnClass = "w-20 bg-primary text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3";

  const [showFilterpurchse, isShowFilterpurchae] = useState(false);
  const [filters, setFilters] = useState({ name: '', status: '' });
  const [filteredData, setFilteredData] = useState(StockDetailsTables);

  function handleFilderPurchaseForm() {
    isShowFilterpurchae((prev) => !prev);
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    const filtered = StockDetailsTables.filter(item => {
      const nameMatch = filters.name.trim() === '' || item.name.toLowerCase().includes(filters.name.toLowerCase());
      const statusMatch = filters.status.trim() === '' || item.status.toLowerCase().includes(filters.status.toLowerCase());
      return nameMatch && statusMatch;
    });
    console.log("Searching with filters:", filters);
    setFilteredData(filtered);
  };

  const handleClear = () => {
    setFilters({ name: '', status: '' });
    setFilteredData(StockDetailsTables);
  };

  const handleExportSelect = (value) => {
    if (value === 'print') {
      window.print();
    } else if (value === 'xsl') {
      if (filteredData.length === 0) {
        alert('No data to export!');
        return;
      }

      const worksheet = XLSX.utils.json_to_sheet(filteredData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'stock');

      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(data, 'stock.xlsx');
    }
  };

  return (
    <div className='w-full'>
      <div className='flex flex-col justify-between mt-6 px-6 py-6 bg-white rounded shadow-lg'>
        <div className='flex justify-between items-center'>
          <div>
            <span className='text-[#6E7191] font-medium'>{path}</span>
          </div>
          <div className='flex gap-3'>
            <NormalButton title="Filter" className='btnClassfilter' filter={handleFilderPurchaseForm} />
            <DropdownButton
              title="Export"
              options={[
                { label: 'Print', value: 'print' },
                { label: 'XSL', value: 'xsl' },
              ]}
              onSelect={handleExportSelect}
            />
          </div>
        </div>

        {showFilterpurchse && (
          <SearchStockForm
            filters={filters}
            onChange={handleFilterChange}
            onSearch={handleSearch}
            onClear={handleClear}
            inputClass={inputClass}
            btnClass={btnClass}
          />
        )}

        <div className="flex justify-center">
          <TableComponent columns={StockTableColumns} data={filteredData} />
        </div>
      </div>
    </div>
  );  
};
export default StockDetails