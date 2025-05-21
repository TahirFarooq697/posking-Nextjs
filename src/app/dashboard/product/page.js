'use client'
import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ProductFilterForm, Button, TableComponent, DropdownButton, NormalButton } from '@/app/components';
import { ProductsDetailsTable,productTableColumns } from '@/app/constants/PageDummyDatas/ProductsDetailsTable';
 const ProductDetail = ({ path }) => {
  const [filters, setFilters] = useState({
    name: '',
    category: '',
    buyingPrice: '',
    sellingPrice: '',
    status: '',
  });

  const [filteredData, setFilteredData] = useState(ProductsDetailsTable);
  const [showFilter, isShowFilter] = useState(false);
  const [rowsToShow, setRowsToShow] = useState(5);

  const inputClass = "border border-gray-300 rounded-md p-2";
  const btnClass = "w-20 bg-[#F23E14] text-white py-2 px-4 rounded-md hover:[cursor:pointer] mr-3";

  const handleFilderPurchaseForm = () => {
    isShowFilter(prev => !prev);
  };

  const handleRowsChange = (value) => {
    setRowsToShow(value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    

    const hasAtLeastOneFilter = Object.values(filters).some(val => val.trim() !== '');
    if (!hasAtLeastOneFilter) {
      setFilteredData(ProductsDetailsTable);
      return;
    }

    const filtered = ProductsDetailsTable.filter(item => {
      return (
        (filters.name.trim() === '' || item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.category.trim() === '' || item.category.toLowerCase().includes(filters.category.toLowerCase())) &&
        (filters.buyingPrice.trim() === '' || item.buyingPrice.toLowerCase().includes(filters.buyingPrice.toLowerCase())) &&
        (filters.sellingPrice.trim() === '' || item.sellingPrice.toLowerCase().includes(filters.sellingPrice.toLowerCase())) &&
        (filters.status.trim() === '' || item.status.toLowerCase().includes(filters.status.toLowerCase()))
      );
    });

    setFilteredData(filtered);
  };

  const handleClear = () => {
    setFilters({
      name: '',
      category: '',
      buyingPrice: '',
      sellingPrice: '',
      status: '',
    });
    setFilteredData(ProductsDetailsTable);
  };

  const handleExportSelect = (value) => {
    if (value === 'print') {
      window.print();
    } else if (value === 'xsl') {
      const exportData = filteredData.slice(0, rowsToShow);
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');

      const excelBuffer = XLSX.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });

      const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
      saveAs(data, 'products.xlsx');
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col justify-between mt-6 px-6 py-6 bg-white rounded shadow-lg print:hidden">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-secondry font-medium">{path}</span>
          </div>
          <div className="flex gap-3">
            <DropdownButton
              title={rowsToShow.toString()}
              options={[
                { label: '5', value: 5 },
                { label: '10', value: 10 },
                { label: '15', value: 15 }, 
              ]}
              onSelect={handleRowsChange}
            />
            <NormalButton
              title="Filter"
              className="btnClassfilter"
              filter={handleFilderPurchaseForm}
            />
            <DropdownButton
              title="Export"
              options={[
                { label: 'Print', value: 'print' },
                { label: 'XSL', value: 'xsl' },
              ]}
              onSelect={handleExportSelect}
            />
            <Button label="+Add Product" path="/dashboard/addProduct" />
          </div>
        </div>

        {showFilter && (
          <ProductFilterForm
            filters={filters}
            onChange={handleFilterChange}
            onSearch={handleSearch}
            onClear={handleClear}
            inputClass={inputClass}
            btnClass={btnClass}
          />
        )}
        <div className="flex justify-center">
          <TableComponent
            columns={productTableColumns}
            data={filteredData.slice(0, rowsToShow)}
          />
        </div>
      </div>

      {/* Print-only table view */}
      <div className="hidden print:block px-6">
        <TableComponent
          columns={productTableColumns}
          data={filteredData.slice(0, rowsToShow)}
        />
      </div>
    </div>
  );
};

export default ProductDetail